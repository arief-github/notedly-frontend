import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Navigation from '../components/Navigation';

const Home = () => {
	return (
		<div>
			<h1>Notedly</h1>
			<p>This is the home page</p>
			<Header/>
			<Navigation/>
		</div>
	)
}

export default Home;