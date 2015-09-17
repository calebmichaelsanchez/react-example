import React, { Component } from 'react';
import Nav from './globals/Nav.jsx';
import Home from './Home';

import '../stylesheets/client.scss';

class App extends Component {
	render(){
		return (
			<div className="app-wrapper">
			<Nav />
				{this.props.children || <Home />}
			</div>
		);
	}
};

export default App;