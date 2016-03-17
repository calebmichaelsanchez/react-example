import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import SeeMore from "../../../shared/SeeMore";

class RunItOnce extends Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		ga('send', 'pageview', '/making-it-awesome-with/run-it-once');
		this.props.setNavTheme(this.props.theme);
	}
	render() {
		let img = {
			hero: {
				one:   require("../../../../../../../images/work/run-it-once/hero/rio-logo.png"),
				two:   require("../../../../../../../images/work/run-it-once/hero/box-front.png"),
				three: require("../../../../../../../images/work/run-it-once/hero/card-01.png"),
				four:  require("../../../../../../../images/work/run-it-once/hero/card-02.png"),
				five:  require("../../../../../../../images/work/run-it-once/hero/card-03.png"),
				six:   require("../../../../../../../images/work/run-it-once/hero/lid-closed.png"),
				six:   require("../../../../../../../images/work/run-it-once/hero/lid-open.png")
			},
			two-cards: require("../../../../../../../images/work/run-it-once/two-cards/01.png"),
			deck: {
				one:   require("../../../../../../../images/work/run-it-once/deck/01.png"),
				two:   require("../../../../../../../images/work/run-it-once/deck/02.png"),
				three: require("../../../../../../../images/work/run-it-once/deck/03.png"),
				four:  require("../../../../../../../images/work/run-it-once/deck/04.png"),
				five:  require("../../../../../../../images/work/run-it-once/deck/05.png")
			},
			gallery: {
				one: require("../../../../../../../images/work/run-it-once/gallery/1.png"),
				two: require("../../../../../../../images/work/run-it-once/gallery/2.png"),
				three: require("../../../../../../../images/work/run-it-once/gallery/3.png")
			},
			cards: {
				one: require("../../../../../../../images/work/run-it-once/cards/1.png"),
				two: require("../../../../../../../images/work/run-it-once/cards/2.png"),
				three: require("../../../../../../../images/work/run-it-once/cards/3.png")
			},
			gallery2: {
				one: require("../../../../../../../images/work/run-it-once/gallery2/1.png"),
				two: require("../../../../../../../images/work/run-it-once/gallery2/2.png"),
				three: require("../../../../../../../images/work/run-it-once/gallery2/3.png")
			},
			seeMore: {
				one:   require("../../../../../../../images/work/see-more/hive.jpg"),
				two:   require("../../../../../../../images/work/see-more/just-family.jpg"),
				three: require("../../../../../../../images/work/see-more/nsac.jpg"),
				four:  require("../../../../../../../images/work/see-more/rent-tree.jpg")
			}
		}
		return (
			<DocumentTitle title="Run It Once | Underbelly Creative">
				<div className="case-study run-it-once">
					<section id="rio-hero" className="hero">
						<section id="parallax-ipad-container" className="ipad">
							<img id="parallax-ipad-item" src={img.ipad} alt=""/>
						</section>
						<div className="project-meta">
							<div className="hero-lg">Fluid Notes</div>
							<p>Brand Identity &amp; UI Design</p>
						</div>
					</section>
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
					<SeeMore items={[
						{ url: "hive", title: "Hive", img: img.seeMore.one },
						{ url: "just-family", title: "Just Family", img: img.seeMore.two },
						{ url: "nsac", title: "North Seathlle Alliance Church", img: img.seeMore.three },
						{ url: "rent-tree", title: "RentTree", img: img.seeMore.four }
					]}/>
				</div>
			</DocumentTitle>
		);
	}
}
RunItOnce.propTypes = {
	name: React.PropTypes.string,
	theme: React.PropTypes.string,
	setNavTheme: React.PropTypes.func
}
RunItOnce.defaultProps = {
	name: 'RunItOnce',
	theme: 'dark'
}
export default RunItOnce;
