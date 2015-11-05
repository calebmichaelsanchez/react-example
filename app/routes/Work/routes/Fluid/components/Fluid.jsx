import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import { Link } from 'react-router';

class Fluid extends Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		ga('send', 'pageview', '/work/fluid');
		this.props.setNavTheme(this.props.theme);
	}
	render() {
		let img = {
			ipad: require("../../../../../assets/img/work/fluid/hero/02.png"),
			brand: require("../../../../../assets/img/work/fluid/icon/fluid-icon-type-med.png"),
			mark: {
				one: require("../../../../../assets/img/work/fluid/branding/01.png"),
				two: require("../../../../../assets/img/work/fluid/branding/02.png"),
				three: require("../../../../../assets/img/work/fluid/branding/03.png"),
				four: require("../../../../../assets/img/work/fluid/branding/04.png"),
				five: require("../../../../../assets/img/work/fluid/branding/05.png"),
				six: require("../../../../../assets/img/work/fluid/branding/06.png"),
			},
			icon: {
				md: require("../../../../../assets/img/work/fluid/icon/icon-med.png"),
				lg: require("../../../../../assets/img/work/fluid/icon/icon-large.png")
			},
			lifestyle: require("../../../../../assets/img/work/fluid/lifestyle/01.jpg")
		}
		return (
			<DocumentTitle title="Fluid | Underbelly Creative">
				<div className="case-study fluid">
					<div id="fluid-hero" className="hero">
						<section id="parallax-ipad-container" className="ipad">
							<img id="parallax-ipad-item" src={img.ipad} alt=""/>
						</section>
						<div className="project-meta">
							<div className="hero-lg">Fluid Notes</div>
							<p>Brand Identity &amp; UI Design</p>
						</div>
					</div>
					<section className="case-study-info">
						<div className="container-sm">
							<div className="grid-1-2 grid-copy challenge">
								<h1>The Challenge</h1>
								<p>Fluid Notes (formally Ghostwriter) is a five-star iPad app for note taking. While the app was well liked and had a good market base, the fluid team wanted to expand the interactions of the app and give the brand an update.</p>
							</div>
							<div className="grid-1-2 grid-copy solution">
								<h1>The Solution</h1>
								<p>We worked with the Fluid team to update the UI and UX of the app, create a new identity, and design a new site. Our updates helped create a more robust and easy to use app, with a wider appeal to a growing audience.</p>
								<a href="http://getfluidapp.com">GetFluidApp.com</a>
							</div>
						</div>
					</section>
					<section className="branding-exploration">
						<div className="container-sm">
							<h1>Branding</h1>
							<img src={img.brand} alt=""/>
						</div>
					</section>
					<section className="mark-exploration">
						<div className="container-sm">
							<h1>Mark Exploration</h1>
							<div className="logotypes">
								<div className="grid-1-3 no-break">
									<img src={img.mark.one} alt=""/>
								</div>
								<div className="grid-1-3 no-break">
									<img src={img.mark.two} alt=""/>
								</div>
								<div className="grid-1-3 no-break">
									<img src={img.mark.three} alt=""/>
								</div>
							</div>
							<div className="app-icons">
								<div className="grid-1-3 no-break">
									<img src={img.mark.four} alt=""/>
								</div>
								<div className="grid-1-3 no-break">
									<img src={img.mark.five} alt=""/>
								</div>
								<div className="grid-1-3 no-break">
									<img src={img.mark.six} alt=""/>
								</div>
							</div>
						</div>
					</section>
					<section className="detailed-icon">
						<div className="container-sm">
							<h1>Detailed Icon</h1>
							<img src={img.icon.md} alt=""/>
						</div>
					</section>
					<section className="lifestyle">
						<div className="container-sm">
							<div className="video widescreen">
								<iframe src="https://player.vimeo.com/video/60216372" width="500" height="281" frameBorder="0" allowFullScreen></iframe>
							</div>
							<img src={img.lifestyle} alt=""/>
							<div className="quote">
								<p>"Underbelly brought a team of experienced and approachable designers to assist our development team and produce an awesome user interface for the app."</p>
								<span className="author">- Michael Privat</span>
							</div>
						</div>
					</section>
					<section className="see-more-container">
						<h1>You might also like</h1>
						<Link to="/work/hive" className="grid-1-4 see-more-item" style={{backgroundImage: "url('../../../../../app/assets/img/work/see-more/hive.jpg')"}}>
							<div className="see-more-title">Hive</div>
						</Link>
						<Link to="/work/just-family" className="grid-1-4 see-more-item" style={{backgroundImage: "url('../../../../../app/assets/img/work/see-more/just-family.jpg')"}}>
							<div className="see-more-title">Just Family</div>
						</Link>
						<Link to="/work/nsac" className="grid-1-4 see-more-item" style={{backgroundImage: "url('../../../../../app/assets/img/work/see-more/nsac.jpg')"}}>
							<div className="see-more-title">North Seattle Alliance Church</div>
						</Link>
						<Link to="/work/rent-tree" className="grid-1-4 see-more-item" style={{backgroundImage: "url('../../../../../app/assets/img/work/see-more/rent-tree.jpg')"}}>
							<div className="see-more-title">RentTree</div>
						</Link>
					</section>
				</div>
			</DocumentTitle>
		);
	}
}
Fluid.propTypes = {
	name: React.PropTypes.string,
	theme: React.PropTypes.string,
	setNavTheme: React.PropTypes.func
}
Fluid.defaultProps = {
	name: 'Fluid',
	theme: 'light'
}
export default Fluid;