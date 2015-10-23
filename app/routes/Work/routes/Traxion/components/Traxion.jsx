import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';

class Traxion extends Component {
	constructor(props) {
		super(props);
		this.props.setNavTheme(this.props.theme);
	}
	render() {
		let img = {
			award: require("../../../../../assets/img/work/traxion/awards/traxion-award.png"),
			lifestyle: require("../../../../../assets/img/work/traxion/lifestyle/lifestyle.jpg")
		}
		return (
			<DocumentTitle title="Traxion | Underbelly Creative">
				<section className="case-study traxion">
					<div className="hero">
						<div className="project-meta">
							<div className="hero-lg">Traxion</div>
							<p>iPhone App Design</p>
						</div>
					</div>
					<section className="case-study-info">
						<div className="container-sm">
							<div className="grid-1-2 grid-copy challenge">
								<h1>The Challenge</h1>
								<p>Traxion is an iPhone app used to help young adults manage their ADHD. This app combines several app functions into one so that ADHD can be managed in one centralized location. Submitted to the Health 2.0 conference in 2013 we were given a quick and challenging deadline we were more than happy to take on.</p>
							</div>
							<div className="grid-1-2 grid-copy challenge">
								<h1>The Solution</h1>
								<p>We started design by color coding the sections of the app to help categorize and organize the information being used in the app. Utilizing data about ADHD we designed the app for what individuals with ADHD need to succeed. Finally we animated several key aspects of the app to instill some playfulness in the various sections.</p>
							</div>
						</div>
					</section>
					<section className="award">
						<img src={img.award} alt=""/>
					</section>
					<section className="lifestyle">
						<div className="container-sm">
							<h1>App UI</h1>
							<img src={img.lifestyle} alt=""/>
						</div>
					</section>
				</section>
			</DocumentTitle>
		);
	}
}
Traxion.propTypes = {
	name: React.PropTypes.string.isRequired,
	theme: React.PropTypes.string.isRequired,
	setNavTheme: React.PropTypes.func.isRequired
}
Traxion.defaultProps = {
	name: 'traxion',
	theme: 'dark'
}
export default Traxion;