import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';

class Hive extends Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		this.props.setNavTheme(this.props.theme);
	}
	render() {
		let img = {
			brand: require('../../../../../assets/img/work/hive/branding/logo.png'),
			evo: {
				one: require('../../../../../assets/img/work/hive/evolution/01.png'),
				two: require('../../../../../assets/img/work/hive/evolution/02.png'),
				three: require('../../../../../assets/img/work/hive/evolution/03.png')
			},
			responsive: require('../../../../../assets/img/work/hive/responsive/01.png')
		}
		return (
			<DocumentTitle title="Hive | Underbelly Creative">
				<div className="case-study hive">
					<div className="hero">
						<div className="project-meta">
							<div className="hero-lg">Hive Checklists</div>
							<p>Brand Identity, UI/UX Design and Strategy</p>
						</div>
					</div>
					<section className="case-study-info">
						<div className="container-sm">
							<div className="grid-1-2 grid-copy challenge">
								<h1>The Challenge</h1>
								<p>When it comes to checklists, the digital world is chock-full of them. Our challenge was to create one that succeeded where others didn’t — to allow collaboration with a fast and simple interface. We wanted to get people working together without the stress of learning a new system.</p>
							</div>
							<div className="grid-1-2 grid-copy solution">
								<h1>The Solution</h1>
								<p>We worked closely with the Hive team to create a streamlined user experience that would highlight the ease of use and scalibility of the app. So, whether you are part of a large team or a household of two, Hive will work for you.</p>
							</div>
						</div>
					</section>
					<section className="branding-exploration">
						<div className="container-sm">
							<h1>Branding</h1>
							<img src={img.brand} alt="Hive Logo"/>
						</div>
					</section>
					<section className="evolution">
						<div className="container-sm">
							<h1>Evolution</h1>
							<div className="grid-1-3 no-break padded">
								<img src={img.evo.one} alt=""/>
							</div>
							<div className="grid-1-3 no-break padded">
								<img src={img.evo.two} alt=""/>
							</div>
							<div className="grid-1-3 no-break padded">
								<img src={img.evo.three} alt=""/>
							</div>
						</div>
					</section>
					<div className="ui-elements"></div>
					<section className="responsive-ui">
						<div className="container-sm">
							<div className="grid-1-2 copy">
								<h1>Responsive UI</h1>
								<p>On the go or in the office, we designed Hive to work for YOUR unique lifestyle. Create, assign, and complete on any device; it's that easy. And with realtime notifications, you'll never miss a thing.</p>
							</div>
							<div className="grid-1-2 copy">
								<img src={img.responsive} alt=""/>
							</div>
						</div>
					</section>
					<div className="checklists"></div>
					<section className="quote-container">
						<div className="container-sm">
							<div className="quote">
								<p>"I have worked with Underbelly for over a year and they are very creative, produce awesome user interfaces and are easy and professional to work with."</p>
								<span className="author">- Vivek Chugh</span>
							</div>
						</div>
					</section>
				</div>
			</DocumentTitle>
		);
	}
}
Hive.propTypes = {
	name: React.PropTypes.string.isRequired,
	theme: React.PropTypes.string.isRequired,
	setNavTheme: React.PropTypes.func
}
Hive.defaultProps = {
	name: 'hive',
	theme: 'dark'
}
export default Hive;