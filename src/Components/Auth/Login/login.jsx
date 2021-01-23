import {useRef } from 'react'
import './login.css';
import Logo from './../../../img/logo.png'


function Login() {

	let usernameRef = useRef()
	let passwordRef = useRef()

	const submitFn = e => {
		e.preventDefault()

		const username = usernameRef.current.value
		const password = passwordRef.current.value
		console.log(username, password)	
	}

	return (
		<>
			<div className="breadcrumb">
				<div className="breadcrumb__list">
					<div className="breadcrumb__img">
						<img src={Logo} alt="img" width="350"/>
					</div>
					<form onSubmit={e => submitFn(e)} className="breadcrumb__item">
						<h3 className="breadcrumb__title">Login</h3>
					<input className="breadcrumb__input" placeholder="username" type="text" name="username" ref={usernameRef} />
					<input className="breadcrumb__input" placeholder="password" type="password" name="password" ref={passwordRef}/>
						<button className="breadcrumb__button">Login</button>
					</form>
				</div>
			</div>
			</>
			);
}

export default Login;