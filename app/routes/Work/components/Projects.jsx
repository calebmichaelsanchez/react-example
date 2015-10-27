import React, { Component } from 'react';
import { Link } from 'react-router';
import Icon from '../../../components/globals/icons/Icon';
import DocumentTitle from 'react-document-title';

class Projects extends Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		this.props.setNavTheme(this.props.theme);
	}
	render() {
		return (
			<section className="project-grid-container">
				<header className="project-header">
					<span className="hero-lg">Our Work</span>
				</header>
				{ /* Row 1 */ }
				<Link to="/work/aiga" className="project-item-aiga project-item-lg">
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
					<Link to="/work/just-family" className="project-item-sm">
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
					<Link to="/work/traxion" className="project-item-sm">
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
			{ /* Row 2 */ }
				<div className="project-container">
					<Link to="/work/rent-tree" className="project-item-sm">
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
					<a href="#" className="project-item-sm">
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
					</a>
				</div>
				<Link to="/work/fluid" className="project-item-fluid project-item-lg">
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
					<a href="#" className="project-item-sm">
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
					</a>
					<Link to="/work/hive" className="project-item-sm">
						<div className="project-meta project-meta-large right-project-meta-indicator">
							<div>
								<h3>Hive</h3>
								<span className="btn">
									View Project
									<Icon icon="arrow" type="icon-btn" theme="dark" />
								</span>
							</div>
						</div>
						<div className="project-image-hive"></div>
					</Link>
				</div>
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