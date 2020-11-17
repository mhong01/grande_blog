import React from 'react';

import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";
import MainPage from '../MainPage/MainPage';
import Personal from '../PostContent/Personal';
import SignUp from '../Signup/SignUp';
import SignIn from '../Login/SignIn';

export function GrandeRouter (){
	return (
		<div>
			<Route exact={true} path="/" component={MainPage}/>
			<Route path="/personal" component={Personal}/>
			<Route path="/signup" component={SignUp}/>
			<Route path='/signin' component={SignIn}/>
		</div>
	);
}