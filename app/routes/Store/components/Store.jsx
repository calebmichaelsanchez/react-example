import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';

class Store extends Component {
	render(){
		return (
			<DocumentTitle title="Store | Underbelly Creative">
			<section className="home">
				<div className="hero hero-home">
					<div className="ghosted">
						STORE
					</div>
				</div>
			</section>
			</DocumentTitle>
		)
	}
};

export default Store;