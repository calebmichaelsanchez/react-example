import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import { Link } from 'react-router';
import Icon from '../../../shared/icons/Icon';
import DribbbleContainer from './DribbbleContainer';
import ProjectLg from './ProjectLg';
import ProjectSm from './ProjectSm';

class Projects extends Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		ga('send', 'pageview', '/making-it-awesome');
		this.props.setNavTheme(this.props.theme);
	}
	render() {
		return (
			<div>
			<section className="projects">
				<header className="projects__header">
					<span className="hero-lg">Our Work</span>
				</header>
				<div className="projects__container projects__container--left">
					<ProjectLg name="run-it-once" title="Run It Once" theme="light" />
				</div>
				<div className="projects__container projects__container--right">
					<ProjectSm direction="left" name="just-family" title="JustFamily" theme="dark" />
					<ProjectSm direction="right" name="sizzling-platter" title="Sizzling Platter" theme="dark" />
				</div>
				<div className="projects__container projects__container--full">
					<a href="http://saltcitybuilds.com/" className="projects__item projects__item--scb projects__item--full">
					  <div className="projects__item-image projects__item-image--full projects__item-image--scb"></div>
					  <div className="projects__item-meta projects__item-meta--full projects__item-meta-indicator--left">
					    <div>
					      <h3>Salt City Builds</h3>
					      <span className="projects__item-btn">
					        View Site
					        <Icon icon="arrow" type="icon-btn" theme="light" />
					      </span>
					    </div>
					  </div>
					</a>
				</div>
				<div className="projects__container projects__container--left">
					<ProjectSm direction="left" name="rent-tree" title="RentTree" theme="dark" />
					<ProjectSm direction="right" name="nsac" title="North Seattle Alliance Church" theme="dark" />
				</div>
				<div className="projects__container projects__container--right">
					<ProjectLg name="campus" title="The Campus" theme="dark" />
				</div>
				<div className="projects__container projects__container--left">
					<ProjectLg name="aiga" title="AIGA 100 Show" theme="light" />
				</div>
				<div className="projects__container projects__container--right">
					<ProjectSm direction="left" name="fluid" title="Fluid" theme="dark" />
					<ProjectSm direction="right" name="hive" title="Hive Checklists" theme="dark" />
				</div>
			</section>
			<DribbbleContainer />
			<section className="work-with-us">
				<Link to="/all-ears" className="h3 work-with-us-cta">Work with us <Icon icon="arrow" theme="dark" type="icon-cta" /></Link>
			</section>
			</div>
		);
	}
}
Projects.propTypes = {
	theme: React.PropTypes.string.isRequired,
	setNavTheme: React.PropTypes.func.isRequired
}
Projects.defaultProps = {
	theme: 'dark'
}
export default Projects;
