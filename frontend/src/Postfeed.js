import axios from 'axios'
import React from 'react'
import {useState} from 'react';
import Navbar from './Navbar'
import pic from './pic.png'
import './Postfeed.css'
import FileUploader from './FileUploader'
const Postfeed = () => {

	const handleData = () => {
		console.log('hello')
	}
	return (
		<div>
			<Navbar/>
			<div className = "main">
				<div className = 'col outer-container'>
					<div>
						<img src={pic} alt=""/>
						<h2> Posts </h2>
						<textarea name="" id="" cols="30" rows="10" placeholder="your thoughts here"></textarea>
						<br/>
						<button className = 'btn1'> POST </button>
					</div>

					<div>
						<FileUploader/>
					</div>
				</div>

				<div className = 'col side-container'>
					<img src={pic} alt=""/> <h1 className = 'align'> Hello  <button type = 'button' className = 'btn'> FOLLOW </button> </h1>
					<hr/>
					<img src={pic} alt=""/> <h1 className = 'align'> Hello  <button type = 'button' className = 'btn'> FOLLOW </button> </h1>
					<hr/>
					<img src={pic} alt=""/> <h1 className = 'align'> Hello  <button type = 'button' className = 'btn'> FOLLOW </button> </h1>
					<hr/>
					<img src={pic} alt=""/> <h1 className = 'align'> Hello  <button type = 'button' className = 'btn'> FOLLOW </button> </h1>
					<hr/>
					<img src={pic} alt=""/> <h1 className = 'align'> Hello  <button type = 'button' className = 'btn'> FOLLOW </button> </h1>
					<hr/>

				</div>

			</div>

		</div>
	)
}

export default Postfeed