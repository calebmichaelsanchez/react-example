import React from 'react';
import DocumentTitle from 'react-document-title';

class Home extends React.Component {
	render(){
		return (
			<DocumentTitle title='Home'>
			<section className="home">
				<div className="hero hero-home"></div>
			</section>
			</DocumentTitle>
		)
	}
};

export default Home;