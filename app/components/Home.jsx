import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import { findDOMNode } from 'react-dom';
import Icon from './globals/icons/Icon'
import { Link } from 'react-router';
import { transformThreeD, scrollHandler, requestAF } from '../helpers';
import classNames from 'classnames';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loaded: false
		}
	}
	componentDidMount() {
		ga('send', 'pageview', '/');
		this.setState({
			loaded: true
		})
		this.props.setNavTheme(this.props.theme);
		window.addEventListener('scroll', requestAF, false);
	}
	componentWillUnmount() {
		window.removeEventListener('scroll', requestAF, false);
	}
	render(){
		let img = {
			team: require('../assets/img/home/team.jpg'),
			clients: {
				one: require('../assets/img/home/clients/bright-bytes.png'),
				two: require('../assets/img/home/clients/xbox-one.png'),
				three: require('../assets/img/home/clients/just-family.png'),
				four: require('../assets/img/home/clients/little-ceasars.png'),
				five: require('../assets/img/home/clients/experticity.png'),
				six: require('../assets/img/home/clients/microsoft.png'),
				seven: require('../assets/img/home/clients/asurion.png'),
			}
		}
		let classes = classNames({
			'loaded': this.state.loaded
		});
		return (
			<DocumentTitle title='Home | Underbelly Creative'>
				<div className="home">
					<div className={`hero-home ${classes}`}>
						<section id="home-hero" className="hero-item"></section>
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
							<Link to="/work" className="hero-cta">See our work <Icon icon="arrow" theme="light" type="icon-cta" /></Link>
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
							<p>We’re artists and craftsmen who love to create sophisticated strategies, innovative user experiences, and enduring brands.We don’t stop tinkering until the work inspires.</p>
						</div>
					</section>
					<section className="team-photo">
						<img src={img.team} alt=""/>
					</section>
					<section className="work-with-us">
						<Link to="/contact" className="h3 work-with-us-cta">Work with us <Icon icon="arrow" theme="light" type="icon-cta" /></Link>
					</section>
				</div>
			</DocumentTitle>
		)
	}
};
Home.propTypes = {
	theme: React.PropTypes.string.isRequired,
	setNavTheme: React.PropTypes.func
}
Home.defaultProps = {
	theme: 'dark'
}
export default Home;