import { useState } from 'react'
import "../assets/css/landing.css"
import login from '../assets/images/login.png'


function Login() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	async function loginUser(event) {
		event.preventDefault()

		const response = await fetch('http://localhost:2000/api/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email,
				password,
			}),
		})

		const data = await response.json()

		if(email !=="" && password!==""){
			if (data) {
				// localStorage.setItem('token', data.user)
				alert('Login successful')
				window.location.href = '/dashboard'
			} else {
				alert('Please check your username and password')
			}
		}else{
			alert("Enter Credentials")
		}
	}

	return (
		<div className='container'>
		
			<form className='register-form' onSubmit={loginUser}>
			<h1 className='head'>Login</h1><br/>
				<input className='form-control'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					type="email"
					placeholder="Email"
				/>
				<br />
				<input className='form-control'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					type="password"
					placeholder="Password"
				/>
				<br />
				<input className='btn' type="submit" value="Login" />
			</form>
			<div>
      <img src={login} alt="BigCo Inc. logo"/>
      </div>
		</div>
	)
}

export default Login