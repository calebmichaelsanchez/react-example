import React from 'react';
import { RouteHandler } from "react-router";
import Nav from './globals/Nav';
import Footer from './globals/Footer';

class Main extends React.Component {
	render(){
		return (
			<div className="app-wrapper">
				<Nav />
				<RouteHandler />
				<Footer />
			</div>
		)
	}
};

export default Main;