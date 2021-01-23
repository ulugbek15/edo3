import { useState } from 'react'
import { gql, useQuery } from '@apollo/client';
import './staff.css'

const staff = gql`
	query staff($branchId: ID!) {
	  staff(branchId: $branchId) {
	    userInfo {
	      username
	      firstname
	      lastname
	      middlename
	    }
	    branchInfo {
	      name
	    }
	    departmentInfo {
	      name
	    }
	    position {
	      name
	    }
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

const Staff = () => {

	const [branchId, setBranchId ] = useState('daceb576-e9ba-4bf8-8cfc-73250176458e')

	const { loading: staffLoading , error: staffError, data: staffData } = useQuery(staff, {
		variables: { branchId }
	})

	const { loading: branchLoading , error: branchError, data: branchData } = useQuery(branches)

	const handlechange = e => {
		setBranchId(e.target.value)
	}

	if(staffLoading) return <p>Loading...</p>
	if(staffError) return <p>Error...</p>
		
		if(branchLoading) return <p>Loading..</p>
		if(branchError) return <p>Error...</p>



				return (
					<>
						<h1>Staff</h1>

						<select onChange={handlechange} name="" id="" defaultValue="0">
							<>
								<option disabled={true} value="0">Select</option>

								{
									branchData && branchData.branches.map((b, i) => (
										<option key={i} value={b.id}>{b.name}</option>
										))
									}
								</>

							</select>
							<div className="wrapper">
								<ul>
									<h4>Username</h4>

									{
										staffData && staffData.staff.userInfo.map((e,i) => (
											<>
												<li key={i}>{e.username}</li>
												</>
												))
										}

									</ul>
									<ul>
										<h4>Name</h4>

										{
											staffData && staffData.staff.userInfo.map((e,i) => (
												<>
													<li key={i}>{e.firstname}</li>
													</>
													))
											}

										</ul>
										<ul>
											<h4>LastName</h4>

											{
												staffData && staffData.staff.userInfo.map((e,i) => (
													<>
														<li key={i}>{e.lastname}</li>
														</>
														))
												}

											</ul>
											<ul>
												<h4>MiddleName</h4>

												{
													staffData && staffData.staff.userInfo.map((e,i) => (
														<>
															<li key={i}>{e.middlename}</li>
															</>
															))
													}

												</ul>
												<ul>
													<h4>Department</h4>

													{
														staffData && staffData.staff.departmentInfo.map((e,i) => (
															<li>{e.name}</li>
															))
														}

													</ul>
													<ul>
														<h4>Branches</h4>

														{
															staffData && 
															<li >{staffData.staff.branchInfo.name}</li>
															}

														</ul>
													</div>
													</>
													)
		}

		export default Staff;