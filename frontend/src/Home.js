import React from 'react'
import {Link} from 'react-router-dom';
import {Fragment} from 'react';
import './Home.css'
const Home = () => {
	return (
		<Fragment>
				<div className = 'header'>
					<h3 className = 'name' > Social Media </h3> 
					<div className = 'right'>
						<Link className = 'item' to = "/" style = {{textDecoration: 'none'}}> Home  </Link> 
						<Link className = 'item' to = '/Signup' style = {{textDecoration: 'none'}}> Sign Up </Link>
						<Link className = 'item' to = '/Signin'style = {{textDecoration: 'none'}}> Sign In </Link>
					</div>
				</div>
		</Fragment>	
	)
}

export default Home;