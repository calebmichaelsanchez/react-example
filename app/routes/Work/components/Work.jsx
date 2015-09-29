import React, { Component } from 'react';

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
			<section className={`case-study ${this.props.children.children.main.props.name}`}>
				{children}
			</section>
		);
	}
}

export default Work;