import React, { Component } from 'react';
import Projects from './Projects';

class Work extends Component {
	constructor(props) {
		super(props);
		this.props.setNavTheme(this.props.theme);
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
					) : ( <Projects /> )}
			</section>
		);
	}
}
Work.propTypes = {
	theme: React.PropTypes.string.isRequired,
	setNavTheme: React.PropTypes.func.isRequired
}
Work.defaultProps = {
	theme: 'dark'
}
export default Work;