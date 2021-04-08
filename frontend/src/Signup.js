import React from 'react'
import {useState} from 'react';
import './Signup.css'
import Home from './Home'
const Signup = () => {

	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const handleNameChange = (event) => {
		console.log(event.target.value)
		setName(event.target.value)
	}
	const handleEmailChange = (event) => {
		console.log(event.target.value)
		setEmail(event.target.value)
	}
	const handlePasswordChange = (event) => {
		console.log(event.target.value)
		setPassword(event.target.value)
	}
	const submitData = (event) => {
		event.preventDefault()
		console.log('hello')
		setName('')
		setEmail('')
		setPassword('')
	}
	return (
			<div>
				<Home/>
				<div className = 'body-container'> 
					<h1 className = 'font1'> Sign Up </h1>

					<form onSubmit = {submitData}>
						<input type="text" className = 'inputText' value = {name} onChange = {handleNameChange} placeholder = "Name"/>
						<br/>
						<input type="text" value = {email} onChange = {handleEmailChange} placeholder = "Email"/>
						<br/>
						<input type="password" value = {password} onChange = {handlePasswordChange} placeholder = "Password"/>
						<br/>
						<button className = 'btn' type = "submit"> SUBMIT </button>
					</form>
				 </div>
			 </div>
		)
}

export default Signup;