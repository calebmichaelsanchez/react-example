import React from 'react';
import { RouteHandler } from "react-router";
import Nav from './globals/Nav';
import Footer from './globals/Footer';
import DocumentTitle from 'react-document-title';

class Main extends React.Component {
	render(){
		return (
			<DocumentTitle title="My Web App">
			<div className="app-wrapper">
				<RouteHandler />
			</div>
			</DocumentTitle>
		)
	}
};

export default Main;