import React, { Component } from 'react';
import ReactTabs, {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import DocumentTitle from 'react-document-title';
import { Link } from 'react-router';

class Aiga extends Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		this.props.setNavTheme(this.props.theme);
	}
	handleSelected(index, last) {
		console.log('Selected tab: ' + index + ', Last tab: ' + last);
	}
	render() {
		let img = {
			brand: {
				geo: {
					one: require('../../../../../assets/img/work/aiga/brand-exploration/geometric/01.jpg'),
					two: require('../../../../../assets/img/work/aiga/brand-exploration/geometric/02.jpg'),
					three: require('../../../../../assets/img/work/aiga/brand-exploration/geometric/03.jpg'),
				},
				tools: {
					one: require('../../../../../assets/img/work/aiga/brand-exploration/tools/01.jpg'),
					two: require('../../../../../assets/img/work/aiga/brand-exploration/tools/02.jpg'),
					three: require('../../../../../assets/img/work/aiga/brand-exploration/tools/03.jpg'),
				},
				midCentury: {
					one: require('../../../../../assets/img/work/aiga/brand-exploration/mid-century/01.jpg'),
					two: require('../../../../../assets/img/work/aiga/brand-exploration/mid-century/02.jpg'),
					three: require('../../../../../assets/img/work/aiga/brand-exploration/mid-century/03.jpg'),
				}
			},
			finalDirection: require('../../../../../assets/img/work/aiga/finalized/poster.png'),
			website: require('../../../../../assets/img/work/aiga/website/01.png'),
			lifeStyle: {
				one: require('../../../../../assets/img/work/aiga/lifestyle/01.jpg'),
				two: require('../../../../../assets/img/work/aiga/lifestyle/02.jpg')
			},
			seeMore: {
				one: require('../../../../../assets/img/work/see-more/rent-tree.jpg'),
				two: require('../../../../../assets/img/work/see-more/nsac.jpg'),
				three: require('../../../../../assets/img/work/see-more/fluid.jpg'),
				four: require('../../../../../assets/img/work/see-more/bountiful.jpg')
			}
		}
		return (
			<DocumentTitle title="AIGA | Underbelly Creative">
				<div className="case-study aiga">
					<div className="hero">
						<div className="project-meta">
							<div className="hero-lg">The 2014 AIGA 100 Show</div>
							<p>Brand Identity, UI Design, &amp; Web Development</p>
						</div>
					</div>
					<section className="case-study-info">
						<div className="container-sm">
							<div className="grid-1-2 grid-copy challenge">
								<h1>The Challenge</h1>
								<p>The AIGA 100 show is an event celebrating design talent in Utah. Several hundred pieces are submitted, but only the best 100 pieces make it. Out of those 100, ten are chosen to receive the coveted Copper Ingot. Underbelly had the amazing opportunity to create a concept, design, and website for the 25th anniversary.</p>
							</div><div className="grid-1-2 grid-copy solution">
								<h1>The Solution</h1>
								<p>Our designers created an art deco concept to highlight the fact that this year was the 25th anniversary. We crafted the entire experience, from an event landing page introducing everyone to the design, to all of the environmental and printed pieces at the event. The result was a cohesive feel throughout the show, including awards, certificates and posters that attendees were excited to take home.</p>
							</div>
						</div>
					</section>
					<section className="branding-exploration">
						<div className="container-sm">
							<h1>Brand Exploration</h1>
							<Tabs>
								<TabList>
									<Tab>Geometric</Tab>
									<Tab>Tools of the Trade</Tab>
									<Tab>Mid-Century</Tab>
								</TabList>
								<TabPanel>
									<div className="grid-1-3">
										<img src={img.brand.geo.one} />
									</div>
									<div className="grid-1-3">
										<img src={img.brand.geo.two} />
									</div>
									<div className="grid-1-3">
										<img src={img.brand.geo.three} />
									</div>
								</TabPanel>
								<TabPanel>
									<div className="grid-1-3">
										<img src={img.brand.tools.one} />
									</div>
									<div className="grid-1-3">
										<img src={img.brand.tools.two} />
									</div>
									<div className="grid-1-3">
										<img src={img.brand.tools.three} />
									</div>
								</TabPanel>
								<TabPanel>
									<div className="grid-1-3">
										<img src={img.brand.midCentury.one} />
									</div>
									<div className="grid-1-3">
										<img src={img.brand.midCentury.two} />
									</div>
									<div className="grid-1-3">
										<img src={img.brand.midCentury.three} />
									</div>
								</TabPanel>
							</Tabs>
						</div>
					</section>
					<section className="final-direction">
						<div className="container-sm">
							<h1>Finalized Direction</h1>
							<img src={img.finalDirection} />
						</div>
					</section>
					<section className="lifestyle">
						<div className="container-sm">
							<img src={img.lifeStyle.one} />
							<div className="video widescreen">
								<iframe src="https://player.vimeo.com/video/96955791" width="500" height="281" frameBorder="0" allowFullScreen></iframe>
							</div>
							<img src={img.lifeStyle.two} />
						</div>
					</section>
					<section className="website">
						<div className="container-sm">
							<h1>Website</h1>
							<img src={img.website} />
							<div className="quote">
								<p>"Underbelly couldn’t have done a better job with branding the 100 Show. Every piece was so thought out, and beautifully executed. They worked tirelessly to give us the best product possible, and it really showed!"</p>
								<span className="author">- Kassie Wright</span>
							</div>
						</div>
					</section>
					<section className="see-more-container">
						<h1>You might also like</h1>
						<Link to="/work/rent-tree" className="grid-1-4 see-more-item" style={{backgroundImage: "url('../../../../../app/assets/img/work/see-more/rent-tree.jpg')"}}>
							<div className="see-more-title">RentTree</div>
						</Link>
						<Link to="/work/nsac" className="grid-1-4 see-more-item" style={{backgroundImage: "url('../../../../../app/assets/img/work/see-more/nsac.jpg')"}}>
							<div className="see-more-title">North Seattle Alliance Church</div>
						</Link>
						<Link to="/work/fluid" className="grid-1-4 see-more-item" style={{backgroundImage: "url('../../../../../app/assets/img/work/see-more/fluid.jpg')"}}>
							<div className="see-more-title">Fluid</div>
						</Link>
						<Link to="/work/bountiful-dental" className="grid-1-4 see-more-item" style={{backgroundImage: "url('../../../../../app/assets/img/work/see-more/bountiful.jpg')"}}>
							<div className="see-more-title">Bountiful Dental</div>
						</Link>
					</section>
				</div>
			</DocumentTitle>
		);
	}
}
Aiga.propTypes = {
	name: React.PropTypes.string,
	theme: React.PropTypes.string,
	setNavTheme: React.PropTypes.func
};
Aiga.defaultProps = {
	name: 'aiga',
	theme: 'dark'
};

export default Aiga;