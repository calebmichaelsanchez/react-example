import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import { Link } from 'react-router';

class Traxion extends Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		this.props.setNavTheme(this.props.theme);
	}
	render() {
		let img = {
			award: require("../../../../../assets/img/work/traxion/awards/traxion-award.png"),
			lifestyle: require("../../../../../assets/img/work/traxion/lifestyle/lifestyle.jpg"),
			animation: {
				one: require('../../../../../assets/img/work/traxion/animation/chart@2x.gif'),
				two: require('../../../../../assets/img/work/traxion/animation/percent@2x.gif')
			}
		}
		return (
			<DocumentTitle title="Traxion | Underbelly Creative">
				<div className="case-study traxion">
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
					<section className="animations">
						<div className="container-sm">
							<h1>App Animations</h1>
							<div className="traxion-screen">
								<div className="screen-item">
									<img src={img.animation.one} alt=""/>
								</div>
							</div>
							<div className="traxion-screen">
								<div className="screen-item">
									<img src={img.animation.two} alt=""/>
								</div>
							</div>
							<div className="quote">
								<p>"Underbelly was great to work with. They spun their team up quickly, and approached the project with a perfect mix of creative reflection and pragmatic commitment to our timeframes."</p>
								<span className="author">- Jeff Lee</span>
							</div>
						</div>
					</section>
					<section className="see-more-container">
						<h1>You might also like</h1>
						<Link to="/work/aiga" className="grid-1-4 see-more-item" style={{backgroundImage: "url('../../../../../app/assets/img/work/see-more/aiga.jpg')"}}>
							<div className="see-more-title">AIGA Salt Lake City 100 Show</div>
						</Link>
						<Link to="/work/fluid" className="grid-1-4 see-more-item" style={{backgroundImage: "url('../../../../../app/assets/img/work/see-more/fluid.jpg')"}}>
							<div className="see-more-title">Fluid</div>
						</Link>
						<Link to="/work/hive" className="grid-1-4 see-more-item" style={{backgroundImage: "url('../../../../../app/assets/img/work/see-more/hive.jpg')"}}>
							<div className="see-more-title">Hive</div>
						</Link>
						<Link to="/work/just-family" className="grid-1-4 see-more-item" style={{backgroundImage: "url('../../../../../app/assets/img/work/see-more/just-family.jpg')"}}>
							<div className="see-more-title">Just Family</div>
						</Link>
					</section>
				</div>
			</DocumentTitle>
		);
	}
}
Traxion.propTypes = {
	name: React.PropTypes.string.isRequired,
	theme: React.PropTypes.string.isRequired,
	setNavTheme: React.PropTypes.func
}
Traxion.defaultProps = {
	name: 'traxion',
	theme: 'dark'
}
export default Traxion;