import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import Icon from './globals/icons/Icon'
import { Link } from 'react-router';

class Home extends Component {
	constructor(props) {
		super(props);
		this.props.setNavTheme(this.props.theme);
	}
	render(){
		return (
			<DocumentTitle title='Home | Underbelly Creative'>
				<div className="home">
					<div className="hero-home">
						<div className="what-we-do">
							<div className="category-item">
								<Icon icon="ux" />
								<span className="category-title">UX</span>
							</div>
							<div className="category-item">
								<Icon icon="brand" />
								<span className="category-title">Branding</span>
							</div>
							<div className="category-item">
								<Icon icon="dev" />
								<span className="category-title">Dev</span>
							</div>
							<Link to="work" className="hero-cta">See our work <Icon icon="arrow" theme="light" type="icon-cta" /></Link>
						</div>
					</div>
					<section className="mission">
						<div className="container-xs">
							<p>We’re artists and craftsmen who love to create sophisticated strategies, innovative user experiences, and enduring brands.We don’t stop tinkering until the work inspires.</p>
						</div>
					</section>
					<section className="work-with-us">
						<Link to="contact" className="h3 work-with-us-cta">Work with us <Icon icon="arrow" theme="light" type="icon-cta" /></Link>
					</section>
				</div>
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