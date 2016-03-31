import React, { Component } from 'react';
import Projects from './Projects';

class Work extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		let { setNavTheme, windowWidth, documentHeight, viewportHeight } = this.props;
		if (this.props.children) {
			return React.cloneElement(this.props.children, {
		                      setNavTheme    : setNavTheme,
		                      windowWidth    : windowWidth,
		                      documentHeight : documentHeight,
		                      viewportHeight : viewportHeight
		                    });
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
