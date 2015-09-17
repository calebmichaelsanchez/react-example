import React, { Component } from 'react';

class Work extends Component {
	render() {
		let { children } = this.props;
		let name = children.main.props.name;
		console.log(this.props);
		return(
			<section className={`case-studies ${name}`}>
				{ children.main }
			</section>
		);
	}
}

export default Work;