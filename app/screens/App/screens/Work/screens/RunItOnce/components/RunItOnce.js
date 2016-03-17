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
			// two-cards: require("../../../../../../../images/work/run-it-once/two-cards/01.png"),
			// ipad:  require("../../../../../../../images/work/fluid/hero/02.png"),
			// brand: require("../../../../../../../images/work/fluid/icon/fluid-icon-type-med.png"),
			hero: {
				one:   require("../../../../../../../images/work/run-it-once/hero/rio-logo.png"),
				two:   require("../../../../../../../images/work/run-it-once/hero/box-front.png"),
				three: require("../../../../../../../images/work/run-it-once/hero/card-01.png"),
				four:  require("../../../../../../../images/work/run-it-once/hero/card-02.png"),
				five:  require("../../../../../../../images/work/run-it-once/hero/card-03.png"),
				six:   require("../../../../../../../images/work/run-it-once/hero/lid-closed.png"),
				seven:   require("../../../../../../../images/work/run-it-once/hero/lid-open.png"),
				eight:   require("../../../../../../../images/work/run-it-once/hero/two-cards.png")
			},
			deck: {
				one:   require("../../../../../../../images/work/run-it-once/deck/01.png"),
				two:   require("../../../../../../../images/work/run-it-once/deck/02.png"),
				three: require("../../../../../../../images/work/run-it-once/deck/03.png"),
				four:  require("../../../../../../../images/work/run-it-once/deck/04.png"),
				five:  require("../../../../../../../images/work/run-it-once/deck/05.png"),
				six:   require("../../../../../../../images/work/run-it-once/deck/06.png")
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
			lifestyle: require("../../../../../../../images/work/fluid/lifestyle/01.jpg"),
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
						<img src={img.hero.one} alt=""/>
						hellos

						// <div className="project-meta">
						// 	<div className="hero-lg">Fluid Notes</div>
						// 	<p>Brand Identity &amp; UI Design</p>
						// </div>
					</section>

					<section className="two-cards">
						<img src={img.hero.eight} alt=""/>


					</section>

					<section className="case-study-info">
						<div className="container-sm">
							<div className="grid-1-2 grid-copy challenge">
								<h1>The Challenge</h1>
								<p>Combining all of your family photos from mobile phones and computers is an ever growing problem. Just Family is an app that allows people to combine and organize photos from everyone in their household and access them from anywhere.</p>
							</div>
							<div className="grid-1-2 grid-copy challenge">
								<h1>The Solution</h1>
								<p>We worked on a daily basis with Just Family to create a cohesive brand identity and user experience that would highlight the ease and functionality of the app.</p>
								// <p><a target="_blank" href="http://justfamily.com">JustFamily.com</a></p>
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
	name: 'run-it-once',
	theme: 'dark'
}
export default RunItOnce;
