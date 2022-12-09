import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './home';
import MyNotes from './mynotes';
import Favorites from './favorites';

import Layout from '../components/Layout';

const Pages = (props) => {
	return (
			<Router>
					<Layout>
						<Route exact path="/" component={Home}/>
						<Route path="/mynotes" component={MyNotes}/>
						<Route path="/favorites" component={Favorites}/>	
					</Layout>
			</Router>
	)
}

export default Pages;