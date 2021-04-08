import React from 'react'
import {Link} from 'react-router-dom';
import {Fragment} from 'react';

const Home = () => {
	return (
		<Fragment>
				<Link to = "/"> Home </Link> 
				<Link to = '/Signup'> Sign Up </Link>
				<Link to = '/Signin'> Sign In </Link>
		</Fragment>	
	)
}

export default Home;