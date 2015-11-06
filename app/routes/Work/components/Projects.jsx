import React, { Component } from 'react';
import ReactDOM, {findDOMNode} from 'react-dom';
import { Link } from 'react-router';
import Icon from '../../../components/globals/icons/Icon';
import DocumentTitle from 'react-document-title';
import axios from 'axios';

class Projects extends Component {
	constructor(props) {
		super(props);
		this.handleShotRequest = this.handleShotRequest.bind(this);
	}
	componentDidMount() {
		ga('send', 'pageview', '/making-it-awesome');
		this.props.setNavTheme(this.props.theme);
		this.handleShotRequest();
	}
	handleShotRequest() {
		let container = findDOMNode(this.refs.dribbble);
		axios.get('https://api.dribbble.com/v1/teams/underbelly/shots?access_token=6f39afb5fae5e2e0c5113e0097180061e77dd2d8e1eb7cbf5d4c66fa625dcea8')
			.then(function (response) {
				let shots = response.data;
				let shot = '';
				let i;
				for (i = 0;i <= 3; i++) {
					shot = '<a style="background-image: url(' + shots[i].images.hidpi + ')" class="dribbble-item" href="' + shots[i].html_url + '" target="_blank" ><div class="shot-title">' + shots[i].title + '</div></a>';
					container.innerHTML += shot;
				}
			});
	}
	render() {
		return (
			<section className="project-grid-container">
				<header className="project-header">
					<span className="hero-lg">Our Work</span>
				</header>
				{ /* Row 1 */ }
				<Link to="/making-it-awesome-with/aiga" className="project-item-aiga project-item-lg">
					<div className="project-meta project-meta-small">
						<div>
							<h3>AIGA 100 Show</h3>
							<span className="btn">
								View Project
								<Icon icon="arrow" type="icon-btn" theme="light" />
							</span>
						</div>
					</div>
				</Link>
				<div className="project-container">
					<Link to="/making-it-awesome-with/just-family" className="project-item-sm">
						<div className="project-image-just-family"></div>
						<div className="project-meta project-meta-large left-project-meta-indicator">
							<div>
								<h3>JustFamily</h3>
								<span className="btn">
									View Project
									<Icon icon="arrow" type="icon-btn" theme="dark" />
								</span>
							</div>
						</div>
					</Link>
					<Link to="/making-it-awesome-with/traxion" className="project-item-sm">
						<div className="project-meta project-meta-large right-project-meta-indicator">
							<div>
								<h3>Traxion App</h3>
								<span className="btn">
									View Project
									<Icon icon="arrow" type="icon-btn" theme="dark" />
								</span>
							</div>
						</div>
						<div className="project-image-traxion"></div>
					</Link>
				</div>
				<a href="http://saltcitybuilds.com/" className="project-item-scb project-item-full">
					<div className="project-full-image-scb"></div>
					<div className="project-meta project-meta-large left-project-meta-indicator">
						<div>
							<h3>Salt City Builds</h3>
							<span className="btn">
								View Site
								<Icon icon="arrow" type="icon-btn" theme="light" />
							</span>
						</div>
					</div>
				</a>
			{ /* Row 2 */ }
				<div className="project-container">
					<Link to="/making-it-awesome-with/rent-tree" className="project-item-sm">
						<div className="project-image-rent-tree"></div>
						<div className="project-meta project-meta-large left-project-meta-indicator">
							<div>
								<h3>RentTree</h3>
								<span className="btn">
									View Project
									<Icon icon="arrow" type="icon-btn" theme="dark" />
								</span>
							</div>
						</div>
					</Link>
					<Link to="/making-it-awesome-with/nsac" className="project-item-sm">
						<div className="project-meta project-meta-large right-project-meta-indicator">
							<div>
								<h3>North Seattle Alliance Church</h3>
								<span className="btn">
									View Project
									<Icon icon="arrow" type="icon-btn" theme="dark" />
								</span>
							</div>
						</div>
						<div className="project-image-alliance"></div>
					</Link>
				</div>
				<Link to="/making-it-awesome-with/fluid" className="project-item-fluid project-item-lg">
					<div className="project-meta project-meta-small">
						<div>
							<h3>Fluid</h3>
							<span className="btn">
								View Project
								<Icon icon="arrow" type="icon-btn" theme="light" />
							</span>
						</div>
					</div>
				</Link>
				{ /* Row 3 */ }
				<a href="http://brightbytes.net/" target="_blank" className="project-item-bright-bytes project-item-lg">
					<div className="project-meta project-meta-small">
						<div>
							<h3>BrightBytes</h3>
							<span className="btn">
								View Site
								<Icon icon="arrow" type="icon-btn" theme="dark" />
							</span>
						</div>
					</div>
				</a>
				<div className="project-container">
					<Link to="/making-it-awesome-with/bountiful-dental" className="project-item-sm">
						<div className="project-image-bountiful-dental"></div>
						<div className="project-meta project-meta-large left-project-meta-indicator">
							<div>
								<h3>Bountiful Dental</h3>
								<span className="btn">
									View Project
									<Icon icon="arrow" type="icon-btn" theme="dark" />
								</span>
							</div>
						</div>
					</Link>
					<Link to="/making-it-awesome-with/hive" className="project-item-sm">
						<div className="project-meta project-meta-large right-project-meta-indicator">
							<div>
								<h3>Hive Checklists</h3>
								<span className="btn">
									View Project
									<Icon icon="arrow" type="icon-btn" theme="dark" />
								</span>
							</div>
						</div>
						<div className="project-image-hive"></div>
					</Link>
				</div>
				<section className="dribbble-shots">
					<h1>Work In Progress</h1>
						<div ref="dribbble" className="shot-container">
						</div>
					<a href="https://dribbble.com/underbelly">Follow us on dribbble</a>
				</section>
				<section className="work-with-us">
					<Link to="/all-ears" className="h3 work-with-us-cta">Work with us <Icon icon="arrow" theme="dark" type="icon-cta" /></Link>
				</section>
			</section>
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