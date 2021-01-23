import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {LoginProvider} from './Contexts/loginContext.jsx'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import {createUploadLink} from 'apollo-upload-client';
import { BrowserRouter as Router} from "react-router-dom";
import { setContext } from "@apollo/client/link/context";

const uploadLink = createUploadLink({
  uri: 'https://data-edo.herokuapp.com/graphql',
 headers: {
    "keep-alive": "true"
  }
})



const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('access_token');
  return {
    headers: {
      ...headers,
      access_token: token ? `${token}` : "",
    }
  }
});





const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(uploadLink)
})

ReactDOM.render(
  <React.StrictMode>
  		<ApolloProvider client={apolloClient}>
  	      <Router>
                <LoginProvider>
  		      	      <App />
                </LoginProvider>
  	      </Router>
  		</ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
