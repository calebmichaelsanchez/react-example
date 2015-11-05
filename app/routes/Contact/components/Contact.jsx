import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import Form from '../../../components/form/Form';
import FormEmail from '../../../components/form/FormEmail';
import Icon from '../../../components/globals/icons/Icon';

class Contact extends Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		ga('send', 'pageview', '/contact');
		this.props.setNavTheme(this.props.theme);
	}
	render(){
		return (
			<DocumentTitle title='Contact | Underbelly Creative'>
			<section className="contact">
					<Form />
					<section className="contact-info">
						<ul>
							<li className="contact-item contact-item-phone">
								<Icon icon="phone" />
								<a href="tel:8107384977">810.738.4977</a>
							</li><li className="contact-item contact-item-email">
								<Icon icon="computer" />
								<a href="mailto:hello@underbelly.is">hello@underbelly.is</a>
							</li><li className="contact-item contact-item-address">
								<Icon icon="building" />
								<a target="_blank" href="https://goo.gl/PE0ejO">378 W Broadway #3, Salt Lake City, UT 84101</a>
							</li>
						</ul>
					</section>
			</section>
			</DocumentTitle>
		)
	}
};
Contact.propTypes = {
	theme: React.PropTypes.string.isRequired,
	setNavTheme: React.PropTypes.func
}
Contact.defaultProps = {
	theme: 'dark'
}
export default Contact;