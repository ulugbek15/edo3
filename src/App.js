import './App.css';
// import Login from './Components/Auth/Login/login.jsx'
import Users from './Components/Users/users.jsx'
import Departments from './Components/Departments/departments.jsx'
import Documents from './Components/Documents/documents.jsx'
import Positions from './Components/Positions/positions.jsx'
import Branches from './Components/Branches/branches.jsx'
import Staff from './Components/Staff/staff.jsx'
import Collection from './Components/Collection/collection.jsx'
import Login from './Components/Auth/Login/login.jsx'
import FileUpload from './Components/FileUpload/fileupload.jsx'
import Signup from './Components/Auth/SigninUp/signUp.jsx'
import Hr from './Components/Workers/hr.jsx'
import Manager from './Components/Workers/manager.jsx'
import Worker from './Components/Workers/worker.jsx'
import Wrapper from './Components/wrapper.jsx'
import { Switch, Route } from "react-router-dom";

function App() {

	return (
		<>
			<Switch>
				<Route path="/users">
					<Users />
				</Route>
				<Route path="/" exact>
					<Wrapper />
				</Route>
				<Route path="/documents">
					<Documents />
				</Route>
				<Route path="/branches">
					<Branches />
				</Route>
				<Route path="/departments">
					<Departments />
				</Route>
				<Route path="/positions">
					<Positions />
				</Route>
				<Route path="/staff">
					<Staff/>
				</Route>
				<Route path="/collection">
					<Collection/>
				</Route>
				<Route path="/login">
					<Login/>
				</Route>
				<Route path="/signup">
					<Signup/>
				</Route>
				<Route path="/fileupload">
					<FileUpload/>
				</Route>
				<Route path="/hr">
					<Hr/>
				</Route>
				<Route path="/manager">
					<Manager/>
				</Route>
				<Route path="/worker">
					<Worker/>
				</Route>
			</Switch>
			
			</>
			);
}

export default App;
