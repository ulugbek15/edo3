import { useState } from 'react'
import { gql, useQuery } from '@apollo/client'

const collection = gql`
query collection($userId: ID!){
	collection(userId: $userId){
		id
		name
	}
}
`

const users = gql`
query {
	users {
	  id
	  firstname
	}
}
`

const Collection = () =>{

	const [userId, setUserId] = useState('76c8543d-6557-42b0-a7a0-010dbd276861')

	const { loading, data, error} = useQuery(collection,{
		variables: { userId }
	})

	const { loading: usersLoading, data: usersData, error: usersError} = useQuery(users)

	const handlechange = e => {
		setUserId(e.target.value)
	}

	if(loading) return <p>Loading...</p>
	if(error) return <p>Error...</p>

	if(usersLoading) return <p>Loading...</p>
	if(usersError) return <p>Error...</p>

					return(
						<>
							<h1>Collections</h1>
							<select onChange={handlechange} defaultValue="0">

								<option disabled={true} value="0">Select</option>

								{
									usersData && usersData.users.map((c, i) => (
										<option key={i} value={c.id}>{c.firstname}</option>
										))
									}

								</select>
								<ul>
									{
										data && data.collection.map((b,i) => (
											<li key={i}>{b.name}</li>
											))
										}
									</ul>
									</>
									)
			}

			export default Collection;