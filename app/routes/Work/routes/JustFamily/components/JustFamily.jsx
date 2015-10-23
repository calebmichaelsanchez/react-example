import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';

class JustFamily extends Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		this.props.setNavTheme(this.props.theme);
	}
	render() {
		var img = {
			brand: require('../../../../../assets/img/work/just-family/branding/logo.png'),
			exploration: require('../../../../../assets/img/work/just-family/exploration/exploration.png'),
			lifestyle: require('../../../../../assets/img/work/just-family/lifestyle/lifestyle.jpg')
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
					<section className="lifestyle">
						<div className="container-sm">
							<h1>See It In Action</h1>
							<div className="video widescreen">
								<iframe src="https://player.vimeo.com/video/111005756" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
							</div>
							<img src={img.lifestyle} alt=""/>
							<div className="quote">
								<p>"Underbelly constantly impressed us with both their craftsmanship and creativity. We did better work because we worked with them."</p>
								<span className="author">- Nate Quigley</span>
							</div>
						</div>
					</section>
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