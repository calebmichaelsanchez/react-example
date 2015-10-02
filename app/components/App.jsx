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
		var children = React.Children.map(this.props.children, (child) => {
			return React.cloneElement(child, {
				setNavTheme: this.setNavTheme
			}, child.props);
		});
		return (
			<div className="app-wrapper">
				<Nav theme={ this.state.navTheme } />
				{children || <Home />}
				<Footer />
			</div>
		);
	}
};

export default App;