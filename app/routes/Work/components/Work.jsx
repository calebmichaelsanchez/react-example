import React, { Component } from 'react';
import Projects from './Projects';

class Work extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		var children = React.Children.map(this.props.children.children, (child) => {
			return React.cloneElement(child, {
				setNavTheme: this.props.setNavTheme
			});
		});
		return (
			<section className="work">
				{ children ? (
						{children}
					) : ( <Projects setNavTheme={this.props.setNavTheme} /> )}
			</section>
		);
	}
}

export default Work;