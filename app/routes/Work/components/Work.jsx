import React, { Component } from 'react';

class Work extends Component {
	render() {
		let { children } = this.props;

		return (
			<div>
			{children && children.main ? (
				<section className={`case-study ${children.main.props.name}`}>
					{ children.main }
				</section>
			) : (
				<div>Work</div>
			)}
			</div>
		);
	}
}

export default Work;