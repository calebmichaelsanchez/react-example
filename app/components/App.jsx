import React, { Component } from 'react';
import Nav from './globals/Nav';
import Footer from './globals/Footer';
import Home from './Home';

import '../stylesheets/client.scss';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			navTheme: ''
		};
		this.setNavTheme = this.setNavTheme.bind(this);
	}
	setNavTheme(theme) {
		this.setState({
			navTheme: theme
		})
	}
	render(){
		let children = React.cloneElement(this.props.children, { setNavTheme: this.setNavTheme });
		return (
			<div className="app-wrapper">
				<Nav theme={ this.state.navTheme } />
				{children}
				<Footer />
			</div>
		);
	}
};

export default App;