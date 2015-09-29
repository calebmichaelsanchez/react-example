import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';

var exImg = {
	img: {
		one: require('../../../../../assets/img/work/experticity/imagery/01.jpg'),
		two: require('../../../../../assets/img/work/experticity/imagery/02.jpg'),
		three: require('../../../../../assets/img/work/experticity/imagery/03.jpg')
	}
}

class Experticity extends Component {
	constructor(props) {
		super(props);
		this.props.setNavTheme(this.props.theme);
		console.log(this.props);
	}
	render() {
		return (
			<DocumentTitle title="Experticity | Underbelly Creative">
				<div className="case-study">
					<div className="hero"></div>
					<section className="case-study-info">
						<div className="container-sm">
							<h1>The Backstory</h1>
							<p>Experticity was created to engage the most influential product users, the ones who live and breathe outdoor retail. With over two million users, they built a platform to amplify the influence of these users across their personal and professional communities to drive sales and build brands. The users are inturn rewarded with deep discounts.</p>
							<p>I first stepped into the picture when Experticity came to us for help creating a new pattern library to unify and modernize their site. I was then able to put the new pattern library in action and build a profile page. I pushed Experticity in a minimalist direction, and let the UI work in the background to create a less distracting user experience.</p>
						</div>
					</section>
					<section className="imagery">
						<div className="container-md">
							<div className="grid-1">
								<img src={exImg.img.one} alt=""/>
							</div>
							<div className="grid-custom-one">
								<img src={exImg.img.two} alt=""/>
							</div>
							<div className="grid-custom-two">
								<img src={exImg.img.three} alt=""/>
							</div>
						</div>
					</section>
				</div>
			</DocumentTitle>
		);
	}
}

Experticity.propTypes = {
	name: React.PropTypes.string.isRequired,
	theme: React.PropTypes.string.isRequired,
	setNavTheme: React.PropTypes.func.isRequired
}
Experticity.defaultProps = {
	name: 'experticity',
	theme: 'dark'
}

export default Experticity;