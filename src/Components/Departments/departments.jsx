import { useState } from 'react'
import { gql, useQuery } from '@apollo/client';

const departments = gql`
query departments($branchId: ID!){
  departments(branchId: $branchId ){
    id
    name
  }
}
`

const branches = gql`
query {
  branches {
    id
    name
    isMain
  }
}
`


const Departments = () => {

	const [branchId, setBranchId ] = useState('c89b9391-2931-49a6-a5a4-cb605b714e72')

	const { data: DepartmentsData, loading: departmentsLoading, error: departmentsError} = useQuery(departments, {
		variables: { branchId }
	})

	const { data: BranchesData, loading: branchesLoading, error: branchesError} = useQuery(branches)

	const handlechange = e => {
		setBranchId(e.target.value)
	}

	if (departmentsLoading) return <p>Loading...</p>;
	if (departmentsError) return <p>ERROR</p>;

	if (branchesLoading) return <p>Loading...</p>;
	if (branchesError) return <p>ERROR</p>;

	return (
		<>
			<h1>Departments</h1>

			<select onChange={handlechange} name="" id="" defaultValue="0">
				<>
					<option disabled={true} value="0">Select</option>

					{
						BranchesData && BranchesData.branches.map((b, i) => (
							<option key={i} value={b.id}>{b.name}</option>
							))
						}
					</>

				</select>

				<ul>

					{

						DepartmentsData && DepartmentsData.departments.map((d,i) => (
							<li key={i}>{d.name}</li>
							))
						}

					</ul>
					</>
					)
}

export default Departments;