import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';

class Home extends Component {
	constructor(props) {
		super(props);
		this.props.setNavTheme(this.props.theme);
	}
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
Home.propTypes = {
	theme: React.PropTypes.string.isRequired,
	setNavTheme: React.PropTypes.func.isRequired
}
Home.defaultProps = {
	theme: 'dark'
}
export default Home;