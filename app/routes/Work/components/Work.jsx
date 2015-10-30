import React, { Component } from 'react';
import createFragment from 'react-addons-create-fragment';
import Projects from './Projects';
require('../../../assets/img/work/see-more/aiga.jpg');
require('../../../assets/img/work/see-more/bountiful.jpg');
require('../../../assets/img/work/see-more/fluid.jpg');
require('../../../assets/img/work/see-more/hive.jpg');
require('../../../assets/img/work/see-more/just-family.jpg');
require('../../../assets/img/work/see-more/nsac.jpg');
require('../../../assets/img/work/see-more/rent-tree.jpg');
require('../../../assets/img/work/see-more/traxion.jpg');

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