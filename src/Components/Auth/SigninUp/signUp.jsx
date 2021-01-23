import {useRef , useState} from 'react'
import './signUp.css';
import {Redirect} from 'react-router-dom'
import {useLogin} from './../../../Contexts/loginContext.jsx'
import { gql, useMutation, useQuery } from '@apollo/client'
import Logo from './../../../img/logo.png'


const LOGIN = gql`
	mutation register($username: String!, $password: String!, $phoneNumber: String!, $positionId: ID!){
 		 register(username: $username, password: $password, phoneNumber:  $phoneNumber, positionId: $positionId)
	}
`

const positions = gql`
	query{
	  positions{
	    id
	   	name
	  }
	}
`

function Register() {

	const [token, setToken] = useLogin()
	const [positionId, setPositionId] = useState()

	let usernameRef = useRef()
	let numberRef = useRef()
	let passwordRef = useRef()

	const [registerUser, { loading }] = useMutation(LOGIN, {
		update: (cache, data) => {
			console.log(data)
			if(!loading) setToken(data.data.register)
		}
	})

	const { data:positionData } = useQuery(positions)

	const submitFn = e => {
		e.preventDefault()

		const username = usernameRef.current.value
		const phoneNumber = numberRef.current.value
		const password = passwordRef.current.value

		registerUser({
			variables: {
				username,
				password,
				phoneNumber,
				positionId
			}
		})
		e.target.reset()
	}


	const SelectPosition = e =>{
		setPositionId(e.target.value)
	}

	// if(loading) return <p>Loading...</p>
	// if(error) return <p>Error...</p>

	if(token) return <Redirect to="/hr"/>

	return (
		<>
			<div className="breadcrumb">
				<div className="breadcrumb__list">
					<div className="breadcrumb__img">
						<img src={Logo} alt="img" width="350"/>
					</div>
					<form onSubmit={e => submitFn(e)} className="breadcrumb__item">
						<h3 className="breadcrumb__title">Register</h3>
						<input className="breadcrumb__input" placeholder="username" type="text" name="username" ref={usernameRef} />
						<input autoComplete="on" className="breadcrumb__input" placeholder="number" type="text" name="number" ref={numberRef}/>
						<input className="breadcrumb__input" placeholder="password" type="password" name="password" ref={passwordRef}/>
						<select onChange={SelectPosition}>
							{
								positionData && positionData.positions.map((p,i) => (
										<option value={p.id} key={i}>{p.name}</option>
								))
							}
						</select>
						<button className="breadcrumb__button">Register</button>
					</form>
				</div>
			</div>
		</>
	);
}

export default Register;