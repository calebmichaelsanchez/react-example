import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import Form from '../../../components/form/Form';

class Contact extends Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		this.props.setNavTheme(this.props.theme);
	}
	render(){
		return (
			<DocumentTitle title='Contact | Underbelly Creative'>
			<section className="contact">
					<Form />
					{/*<div className="contact-info">
						<ul>
							<li className="contact-item contact-item-phone">810.738.4977</li>
							<li className="contact-item contact-item-email">hello@underbelly.is</li>
							<li className="contact-item contact-item-address">378 W Broadway #3, Salt Lake City, UT 84101</li>
						</ul>
					</div>*/}
			</section>
			</DocumentTitle>
		)
	}
};
Contact.propTypes = {
	theme: React.PropTypes.string.isRequired,
	setNavTheme: React.PropTypes.func.isRequired
}
Contact.defaultProps = {
	theme: 'dark'
}
export default Contact;