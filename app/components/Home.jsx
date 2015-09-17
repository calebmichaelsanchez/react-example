import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';

class Home extends Component {
	render(){
		return (
			<DocumentTitle title='Home | Underbelly Creative'>
			<section className="home">
				<div className="hero hero-home">
					<div className="ghosted">
						HOME
					</div>
				</div>
			</section>
			</DocumentTitle>
		)
	}
};

export default Home;