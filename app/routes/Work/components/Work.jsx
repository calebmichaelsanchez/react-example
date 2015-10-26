import React, { Component } from 'react';
import createFragment from 'react-addons-create-fragment';
import Projects from './Projects';

class Work extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		if (this.props.children) {
			return React.cloneElement(this.props.children, { setNavTheme: this.props.setNavTheme});
		} else {
			return (
				<section className="work">
					<Projects setNavTheme={this.props.setNavTheme} />
				</section>
			);
		}
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