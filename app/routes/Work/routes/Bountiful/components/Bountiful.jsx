import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';

class Bountiful extends Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		this.props.setNavTheme(this.props.theme);
	}
	render() {
		let img = {
			brand: require('../../../../../assets/img/work/bountiful/branding/logo.png'),
			exploration: {
				one: require('../../../../../assets/img/work/bountiful/exploration/01.png'),
				two: require('../../../../../assets/img/work/bountiful/exploration/02.png'),
				three: require('../../../../../assets/img/work/bountiful/exploration/03.png'),
				four: require('../../../../../assets/img/work/bountiful/exploration/04.png')
			},
			lifestyle: require('../../../../../assets/img/work/bountiful/lifestyle/lifestyle.jpg'),
			web: {
				web: require('../../../../../assets/img/work/bountiful/web/web.png'),
				mobile: require('../../../../../assets/img/work/bountiful/web/mobile.png')
			}
		}
		return (
			<DocumentTitle title="Bountiful Dental | Underbelly Creative">
				<div className="case-study bountiful">
					<div className="hero">
						<div className="project-meta">
							<div className="hero-lg">Bountiful Dental</div>
							<p>Brand Identity, Video Production, Web Design &amp; Development</p>
						</div>
					</div>
					<section className="case-study-info">
						<div className="container-sm">
							<div className="grid-1-2 grid-copy challenge">
								<h1>The Challenge</h1>
								<p>Bountiful Dental is small-practice dental office located just outside of Salt Lake City, Utah. Our designers created their identity from the ground up. We started with their logo and identity and followed up with the design and development of their site. In order to make the site cohesive we also shot photography and created an introductory video for them.</p>
							</div>
							<div className="grid-1-2 grid-copy challenge">
								<h1>The Solution</h1>
								<p>Our designers created their identity from the ground up, focusing on a fun and personal direction. We started with their logo and identity and followed up with the design and development of their site. In order to make the site more cohesive, we also shot photography and created an introductory video.</p>
								<p><a href="http://bountifuldental.com">BountifulDental.com</a></p>
							</div>
						</div>
					</section>
					<section className="branding">
						<div className="container-sm">
							<h1>Branding</h1>
							<img src={img.brand} alt=""/>
						</div>
					</section>
					<section className="exploration">
						<div className="container-sm">
							<h1>Exploration</h1>
							<div className="grid-1-4 no-break">
								<img src={img.exploration.one} alt=""/>
							</div>
							<div className="grid-1-4 no-break">
								<img src={img.exploration.two} alt=""/>
							</div>
							<div className="grid-1-4 no-break">
								<img src={img.exploration.three} alt=""/>
							</div>
							<div className="grid-1-4 no-break">
								<img src={img.exploration.four} alt=""/>
							</div>
						</div>
					</section>
					<section className="lifestyle">
						<div className="container-sm">
							<div className="video widescreen">
								<iframe src="https://player.vimeo.com/video/35450167" width="500" height="281" frameBorder="0" allowFullScreen></iframe>
							</div>
							<img src={img.lifestyle} />
						</div>
					</section>
					<section className="web">
						<div className="container-sm">
							<img className="web-img" src={img.web.web} alt=""/><img className="mobile-img" src={img.web.mobile} alt=""/>
							<div className="quote">
								<p>"I know a lot of small businesses in my industry are spending a lot more money on their identity and websites, but I have yet to see one that looks better than what Underbelly created for me."</p>
								<span className="author">- Benjamin Hadfield</span>
							</div>
						</div>
					</section>
				</div>
			</DocumentTitle>
		);
	}
}
Bountiful.propTypes = {
	name: React.PropTypes.string,
	theme: React.PropTypes.string,
	setNavTheme: React.PropTypes.func
};
Bountiful.defaultProps = {
	name: 'bountiful',
	theme: 'light'
};
export default Bountiful;