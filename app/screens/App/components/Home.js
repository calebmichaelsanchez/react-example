import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import { findDOMNode } from 'react-dom';
import Icon from '../shared/icons/Icon';
import { Link } from 'react-router';
import { scroll, lastPosition, transformThreeD, loop } from '../../../shared/util/helpers';
import classNames from 'classnames';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = { loaded: false }
	}
	componentDidMount() {
		ga('send', 'pageview', '/');
		this.setState({ loaded: true })
		this.props.setNavTheme(this.props.theme);
	}
	render(){
		let img = {
			hero: require('../../../images/home/hero-1.jpg'),
			team: require('../../../images/home/team.jpg'),
			clients: {
				one: require('../../../images/home/clients/bright-bytes.png'),
				two: require('../../../images/home/clients/xbox-one.png'),
				three: require('../../../images/home/clients/just-family.png'),
				four: require('../../../images/home/clients/little-ceasars.png'),
				five: require('../../../images/home/clients/experticity.png'),
				six: require('../../../images/home/clients/microsoft.png'),
				seven: require('../../../images/home/clients/asurion.png'),
			}
		}
		let classes = classNames({ 'loaded': this.state.loaded });
		return (
			<DocumentTitle title='Home | Underbelly Creative'>
				<div className="home">
					<div className={`hero-home ${classes}`}>
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
							<Link to="/making-it-awesome" className="hero-cta">See our work <Icon icon="arrow" theme="light" type="icon-cta" /></Link>
						</div>
					</div>
					<section className="clients">
						<div className="container-sm">
							<img src={img.clients.one} alt=""/>
							<img src={img.clients.two} alt=""/>
							<img src={img.clients.three} alt=""/>
							<img src={img.clients.four} alt=""/>
							<img src={img.clients.five} alt=""/>
							<img src={img.clients.six} alt=""/>
							<img src={img.clients.seven} alt=""/>
						</div>
					</section>
					<section className="mission">
						<div className="container-xs">
							<p>We’re artists and craftsmen who love to create sophisticated strategies, innovative user experiences, and enduring brands. We don’t stop tinkering until the work inspires.</p>
						</div>
					</section>
					<section className="team-photo">
						<img src={img.team} alt=""/>
					</section>
					<section className="work-with-us">
						<Link to="/all-ears" className="h3 work-with-us-cta">Work with us <Icon icon="arrow" theme="light" type="icon-cta" /></Link>
					</section>
				</div>
			</DocumentTitle>
		)
	}
}
Home.propTypes = {
	theme: React.PropTypes.string.isRequired,
	setNavTheme: React.PropTypes.func
}
Home.defaultProps = {
	theme: 'dark'
}
export default Home;
