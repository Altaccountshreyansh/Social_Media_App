import React from 'react'
import {Link} from 'react-router-dom';
import {Fragment} from 'react';
import './Home.css'
const Navbar = () => {
	return (
		<Fragment>
				<div className = 'header'>
					<h3 className = 'name' > Social Media </h3> 
					<div className = 'right'>
						<Link className = 'item' to = "/postfeed" style = {{textDecoration: 'none'}}> Home  </Link> 
						<Link className = 'item' to = '/profile' style = {{textDecoration: 'none'}}> My Profile </Link>
						<Link className = 'item' to = '/' style = {{textDecoration: 'none'}}> Sign Out </Link>
					</div>
				</div>
		</Fragment>	
	)
}

export default Navbar;