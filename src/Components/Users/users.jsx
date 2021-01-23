import { gql, useQuery } from '@apollo/client';

const query = gql`
query {
  users {
    id
    role
    username
    firstname
    lastname
    middlename
  }
}
`

const App = () => {

const { data, loading, error } = useQuery(query);



  if (loading) return <p>Loading...</p>
  if (error) return <p>ERROR</p>;

	return (
		<>
			<h1>Users</h1>
			<ul>
				{
				 data.users.map((e,i) => (
						<li key={i}>{e.username} <br/>{e.firstname}, <br/>{e.lastname}, <br/>{e.umiddlename}<hr/></li>
					))
				}

			</ul>
			</>
	)
}

export default App;