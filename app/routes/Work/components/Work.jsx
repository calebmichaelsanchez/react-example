import React, { Component } from 'react';
import createFragment from 'react-addons-create-fragment';
import Projects from './Projects';

class Work extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		console.log(this);
		// let children = createFragment(React.cloneElement(this.props.children, { setNavTheme: this.props.setNavTheme }));
		// let newChildren = React.cloneElement(this.props.children, { setNavTheme: this.props.setNavTheme });
		// let frag = createFragment(children);
		// console.log(children);
		return (
			<section className="work">
				{this.props.children || <Projects setNavTheme={this.props.setNavTheme} />}
			</section>
		);
	}
}
Work.propTypes = {
	theme: React.PropTypes.string.isRequired,
	setNavTheme: React.PropTypes.func
}
Work.defaultProps = {
	theme: 'dark'
}
export default Work;