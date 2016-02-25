import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import SeeMore from '../../../shared/SeeMore';

class JustFamily extends Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		ga('send', 'pageview', '/making-it-awesome-with/just-family');
		this.props.setNavTheme(this.props.theme);
	}
	render() {
		let img = {
			brand: require('../../../../../../../images/work/just-family/branding/logo.png'),
			exploration: require('../../../../../../../images/work/just-family/exploration/exploration.png'),
			lifestyle: require('../../../../../../../images/work/just-family/lifestyle/lifestyle.jpg'),
			app: {
				one: require('../../../../../../../images/work/just-family/app-ui/01.png'),
				two: require('../../../../../../../images/work/just-family/app-ui/02.png')
			},
			icon: {
				one: require('../../../../../../../images/work/just-family/icon/01.png')
			},
			seeMore: {
				one:   require("../../../../../../../images/work/see-more/nsac.jpg"),
				two:   require("../../../../../../../images/work/see-more/rent-tree.jpg"),
				three: require("../../../../../../../images/work/see-more/traxion.jpg"),
				four:  require("../../../../../../../images/work/see-more/aiga.jpg")
			}
		}
		return (
			<DocumentTitle title="JustFamily | Underbelly Creative">
				<div className="case-study just-family">
					<div className="hero"></div>
					<section className="case-study-info">
						<div className="container-sm">
							<div className="grid-1-2 grid-copy challenge">
								<h1>The Challenge</h1>
								<p>Combining all of your family photos from mobile phones and computers is an ever growing problem. Just Family is an app that allows people to combine and organize photos from everyone in their household and access them from anywhere.</p>
							</div>
							<div className="grid-1-2 grid-copy challenge">
								<h1>The Solution</h1>
								<p>We worked on a daily basis with Just Family to create a cohesive brand identity and user experience that would highlight the ease and functionality of the app.</p>
								<p><a target="_blank" href="http://justfamily.com">JustFamily.com</a></p>
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
							<img src={img.exploration} alt=""/>
						</div>
					</section>
					<div className="sketch"></div>
					<section className="app-ui">
						<div className="container-sm">
							<h1>App UI</h1>
							<div className="browser">
								<img src={img.app.one} alt=""/>
							</div>
							<div className="mobile">
								<img src={img.app.two} alt=""/>
							</div>
						</div>
					</section>
					<section className="app-icon">
						<div className="container-sm">
							<h1>App Icon</h1>
							<img src={img.icon.one} alt=""/>
							<img src={img.icon.one} alt=""/>
							<img src={img.icon.one} alt=""/>
						</div>
					</section>
					<section className="lifestyle">
						<div className="container-sm">
							<h1>See It In Action</h1>
							<div className="video widescreen">
								<iframe src="https://player.vimeo.com/video/111005756" width="500" height="281" frameBorder="0" allowFullScreen></iframe>
							</div>
							<img src={img.lifestyle} alt=""/>
							<div className="quote">
								<p>"Underbelly constantly impressed us with both their craftsmanship and creativity. We did better work because we worked with them."</p>
								<span className="author">- Nate Quigley</span>
							</div>
						</div>
					</section>
					<SeeMore items={[
						{ url: "nsac", title: "North Seattle Alliance Church", img: img.seeMore.one },
						{ url: "rent-tree", title: "RentTree", img: img.seeMore.two },
						{ url: "traxion", title: "Traxion App", img: img.seeMore.three },
						{ url: "aiga", title: "AIGA Salt Lake City 100 Show", img: img.seeMore.four }
					]}/>
				</div>
			</DocumentTitle>
		);
	}
}
JustFamily.propTypes = {
	name: React.PropTypes.string.isRequired,
	theme: React.PropTypes.string.isRequired,
	setNavTheme: React.PropTypes.func
}
JustFamily.defaultProps = {
	name: 'just-family',
	theme: 'dark'
}
export default JustFamily;
