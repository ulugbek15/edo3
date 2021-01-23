import { gql, useQuery } from '@apollo/client';

const branches = gql`
query {
  branches {
    id
    name
    isMain
  }
}
`


 const Branches = () => {
	const { data, loading, error} = useQuery(branches)

	if (loading) return <p>Loading...</p>;
	if (error) return <p>ERROR</p>;

	return (
		<>
			<h1>Branches</h1>

			<ul>

				{
				 data.branches.map((b,i) => (
						<li key={i}>{b.name},<br/> {b.isMain} <hr/></li>
					))
				}

			</ul>
		</>
	)
}

export default Branches;