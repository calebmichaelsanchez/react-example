import React from 'react';
import Router from 'react-router';

var Link = Router.Link;

class Footer extends React.Component {
	render() {
		return (
			<footer>
				<a href="/" className="footer-logo">Underbelly</a>
				<ul className="footer-social-nav">
					<li className="social-item">
						<a href="#twitter">Twitter</a>
					</li>
					<li className="social-item">
						<a href="#instagram">Instagram</a>
					</li>
					<li className="social-item">
						<a href="#dribbble">Dribbble</a>
					</li>
					<li className="social-item social-item-contact">
						<Link className="btn btn-default" to="contact">Contact</Link>
					</li>
				</ul>
			</footer>
		)
	}
};

export default Footer;