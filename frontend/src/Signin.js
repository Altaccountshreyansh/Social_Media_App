import axios from 'axios'
import React from 'react'
import {useState} from 'react';
import './Signup.css'
import Home from './Home'
import Postfeed from './Postfeed'
const baseUrl = '/api/user'


const Signin = () => {

	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [flag, setFlag] = useState(false)

	const handleNameChange = (event) => {
		// console.log(event.target.value)
		setName(event.target.value)
	}
	const handleEmailChange = (event) => {
		// console.log(event.target.value)
		setEmail(event.target.value)
	}
	const handlePasswordChange = (event) => {
		// console.log(event.target.value)
		setPassword(event.target.value)
	}
	const submitData = (event) => {
		event.preventDefault()

		const user_cred = {
			email : email, 
			password : password
		}

		axios.post(baseUrl + '/signin', user_cred)
			.then(response => {
				console.log("Hey Logged In!!")
				setEmail('')
				setPassword('')
				setFlag(true)
			})
			.catch(error => {
				console.log(error.response.data)
				setEmail('')
				setPassword('')
			})

	}
	return (
		<div>
			{flag===false ?
				<div>
					<Home/>
					<div className = 'body-container'> 
						<h1 className = 'font1'> Sign In </h1>

						<form onSubmit = {submitData}>
							<input type="text" value = {email} onChange = {handleEmailChange} placeholder = "Email"/>
							<br/>
							<input type="password" value = {password} onChange = {handlePasswordChange} placeholder = "Password"/>
							<br/>
							<button className = 'btn' type = "submit"> SUBMIT </button>
						</form>
					</div>
				</div>
				 :
				<div>
					<Postfeed/>
				</div>
			}
		</div> 
	)
}

export default Signin;