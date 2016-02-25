import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import SeeMore from '../../../shared/SeeMore';

class Hive extends Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		ga('send', 'pageview', '/making-it-awesome-with/hive');
		this.props.setNavTheme(this.props.theme);
	}
	render() {
		let img = {
			brand: require('../../../../../../../images/work/hive/branding/logo.png'),
			evo: {
				one: require('../../../../../../../images/work/hive/evolution/01.png'),
				two: require('../../../../../../../images/work/hive/evolution/02.png'),
				three: require('../../../../../../../images/work/hive/evolution/03.png')
			},
			responsive: require('../../../../../../../images/work/hive/responsive/01.png'),
			seeMore: {
				one:   require("../../../../../../../images/work/see-more/just-family.jpg"),
				two:   require("../../../../../../../images/work/see-more/nsac.jpg"),
				three: require("../../../../../../../images/work/see-more/rent-tree.jpg"),
				four:  require("../../../../../../../images/work/see-more/traxion.jpg")
			}
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
					<SeeMore items={[
						{ url: "just-family", title: "Just Family", img: img.seeMore.one },
						{ url: "nsac", title: "North Seattle Alliance Church", img: img.seeMore.two },
						{ url: "rent-tree", title: "RentTree", img: img.seeMore.three },
						{ url: "traxion", title: "Traxion App", img: img.seeMore.four }
					]}/>
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
