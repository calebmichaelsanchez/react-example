import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import { Link } from 'react-router';
import Icon from '../../../shared/icons/Icon';

class NoMatch extends Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		this.props.setNavTheme(this.props.theme);
	}
	render() {
		let img = {
			compass: "https://s3.amazonaws.com/underbelly/website/404/compass.png"
		}
		let video = {
			poster : "https://s3.amazonaws.com/underbelly/website/404/404.jpg",
			webm   : "https://s3.amazonaws.com/underbelly/website/404/404.webm",
			mp4    : "https://s3.amazonaws.com/underbelly/website/404/404.mp4",
			ogv    : "https://s3.amazonaws.com/underbelly/website/404/404.ogv"
		}
		return (
			<DocumentTitle title="404 | Underbelly Creative">
				<div className="no-match">
					<section className="video-container">
						<video className="video-item" autoPlay loop poster={video.poster}>
		            <source src={video.webm} type="video/webm" />
		            <source src={video.mp4} type="video/mp4" />
		            <source src={video.ogv} type="video/ogv" />
		        </video>
					</section>
					<div className="compass-container">
						<img className="compass-item" src={img.compass} />
						<h2 className="compass-title">404! You've gone adrift!</h2>
						<Link to="/" className="link-btn">
							Go home
							<Icon icon="arrow" type="icon-btn" theme="light" />
						</Link>
					</div>
				</div>
			</DocumentTitle>
		);
	}
}
NoMatch.propTypes = {
	theme: React.PropTypes.string.isRequired,
	setNavTheme: React.PropTypes.func
}
NoMatch.defaultProps = {
	theme: 'dark'
}
export default NoMatch;
