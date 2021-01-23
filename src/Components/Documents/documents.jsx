import { gql , useQuery} from '@apollo/client'
import './../Sidebar/sidebar.css'

const documents = gql`
query{
	documents{
		documentId{
			document_id
		}
		userInfo{
			username
			firstname
			lastname
			middlename

		}
		branchInfo{
			name
		}
	}
}
`


const Documents = () => {
	const {loading, data, error} = useQuery(documents)

	
	if(loading) return <p>Loading...</p>
		if(error) return <p>Error...</p>

			return (
				<>
					<h1>Documents</h1>
					<div className="documents-wrapper">
					<ul className="branch-info">
						<p><b>Branches</b></p>
						{
							data && data.documents.branchInfo.map((b,i) =>(
								<li key={i}><b>{b.name}</b><br/></li>
								))
							}
						</ul>

						<ul className="user-info">
							<>
								<div className="username-wrapper">

									<p><b>Username</b></p>
									{
										data && data.documents.userInfo.map((d,i) =>(<>
											<li key={i}>{d.username}<br/></li>
											</>
											))
										}
									</div>
									<div className="firstname-wrapper">
										<p><b>Firstname</b></p>
										{
											data && data.documents.userInfo.map((d,i) =>(<>
												<li key={i}>{d.firstname}<br/></li>
												</>
												))
											}	
										</div>
										<div className="lastname-wrapper">
										<p><b>Lastname</b></p>
										{
											data && data.documents.userInfo.map((d,i) =>(<>
												<li key={i}>{d.lastname}<br/></li>
												</>
												))
											}
										</div>
										<div className="lastname-wrapper">
											<p><b>MiddleName</b></p>
											{
												data && data.documents.userInfo.map((d,i) =>(<>
													<li key={i}>{d.middlename}<br/></li>
													</>
													))
												}
											</div>

											</>
										</ul>
									</div>
										</>
										)
	}

	export default Documents