import { gql, useQuery } from '@apollo/client'
import { Redirect } from 'react-router-dom'
import { useLogin } from './../../Contexts/loginContext.jsx'

const workers = gql`
	query{
		cabinet{
			userName
			positionName
		}
	}
`

const Hr = () => {

	const [ token ] = useLogin()

	const { loading } = useQuery(workers)

	if(!token) return <Redirect to="/login" />

	const logout = (e) => {
		window.location.href = '/signup'
		localStorage.removeItem('token')
	}

    if(loading) return <p>Loading...</p>
    // if(error) return <p>Error</p>

	


	return (
		<>
			<h1>Assalomu Alaykum Hr</h1>

			<button onClick={e => logout(e)}>Logout</button>
		</>
	)
}

export default Hr;