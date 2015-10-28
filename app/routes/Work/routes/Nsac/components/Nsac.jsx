import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';

class Nsac extends Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		this.props.setNavTheme(this.props.theme);
	}
	render() {
		let img = {
			brand: require('../../../../../assets/img/work/nsac/branding/logo.png'),
			exploration: require('../../../../../assets/img/work/nsac/exploration/exploration.png'),
			lifestyle: require('../../../../../assets/img/work/nsac/lifestyle/lifestyle.jpg'),
			web: {
				web: require('../../../../../assets/img/work/bountiful/web/web.png'),
				mobile: require('../../../../../assets/img/work/bountiful/web/mobile.png')
			}
		}
		return (
			<DocumentTitle title="Nsac | Underbelly Creative">
				<div className="case-study nsac">
					<div className="hero">
						<div className="project-meta">
							<div className="hero-lg">North Seattle Alliance Church</div>
							<p>Brand Identity</p>
						</div>
					</div>
					<section className="case-study-info">
						<div className="container-sm">
							<div className="grid-1-2 grid-copy challenge">
								<h1>The Challenge</h1>
								<p>North Seattle Alliance Church is a Christian faith community in Seattle, Washington. They came to us wanting an updated identity that would create a connection with their community and surroundings. They also wanted something that would appeal to a new younger congregation.</p>
							</div>
							<div className="grid-1-2 grid-copy challenge">
								<h1>The Solution</h1>
								<p>We worked with their leadership team to create a new and meaningful identity. We created a new logo that reflected their desire to connect with their community and give a modern feel to their identity. We also advised them on how to infuse their updated identity throughout their organization.</p>
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
							<h1>Mark Exploration</h1>
							<img src={img.exploration} alt=""/>
						</div>
					</section>
					<section className="lifestyle">
						<div className="container-sm">
							<h1>Color Pallete</h1>
							<div className="swatches-container">
								<div className="swatches-item">
									<span></span>
								</div><div className="swatches-item">
									<span></span>
								</div><div className="swatches-item">
									<span></span>
								</div><div className="swatches-item">
									<span></span>
								</div>
							</div>
							<img src={img.lifestyle} />
							<div className="quote">
								<p>"Underbelly was easy to work with, very professional and produced a design that hit the niche we were looking for."</p>
								<span className="author">- Michael Labrum</span>
							</div>
						</div>
					</section>
				</div>
			</DocumentTitle>
		);
	}
}
Nsac.propTypes = {
	name: React.PropTypes.string,
	theme: React.PropTypes.string,
	setNavTheme: React.PropTypes.func
};
Nsac.defaultProps = {
	name: 'nsac',
	theme: 'dark'
};
export default Nsac;