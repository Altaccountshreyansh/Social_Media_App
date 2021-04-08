import React from 'react';
import {Fragment} from 'react';
import {Route, Switch} from 'react-router-dom';

import Home from './Home';
import Signup from './Signup';
import Signin from './Signin';

const Routes = () => {
		return (
		<Fragment>
			<Switch>
				<Route path = '/' component = {Home} exact />
				<Route path = "/signup" component = {Signup} exact />
				<Route path = "/signin" component = {Signin} exact />
			</Switch>	
		</Fragment>
	)
}

export default Routes;