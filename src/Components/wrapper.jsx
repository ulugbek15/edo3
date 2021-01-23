import { Link } from "react-router-dom";

const Wrapper = () => {

	return (
		<>
			<h1>Links</h1>
			<ul>
				<Link to="/users">Users</Link><br/>
				<Link to="/branches">Branches</Link><br/>
				<Link to="/departments">Departments</Link><br/>
				<Link to="/documents">Documents</Link><br/>
				<Link to="/positions">Positions</Link><br/>
				<Link to="/staff">Staff</Link><br/>
				<Link to="/collection">Collection</Link><br/>
				<Link to="/fileupload">FileUpload</Link>
			</ul>
			</>
			)
}
export default Wrapper;