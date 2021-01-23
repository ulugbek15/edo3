import {gql, useQuery} from "@apollo/client"

const positions = gql`
query{
  positions{
    id
   name
  }
}
`

const Positions = () => {

	const { loading, error, data:positionData } = useQuery(positions)


	if(loading) return <p>Loading...</p>
	if(error) return <p>Error...</p>


	return (
		<>
			<h1>Positions</h1>

			<ul>
				{
					positionData && positionData.positions.map((p,i) => (
						<li key={i}>{p.name}</li>
						))
				}
			</ul>

			</>
			)
}

export default Positions;