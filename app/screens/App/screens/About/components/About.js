import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';

class About extends Component {
	render(){
		console.log(this);
		return (
			<DocumentTitle title="About | Underbelly Creative">
			<section className="home">
				<div className="hero hero-home">
					<div className="ghosted">
						ABOUT
					</div>
				</div>
			</section>
			</DocumentTitle>
		);
	}
};

export default About;