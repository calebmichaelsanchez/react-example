import React, { Component } from 'react/addons';
import Nav from './globals/Nav.jsx';
import Home from './Home';

import '../stylesheets/client.scss';

class App extends Component {
	constructor(props) {
		super(props);
		console.log(this);
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
			</div>
		);
	}
};

export default App;