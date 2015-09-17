import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import Form from '../../../components/form/Form';
import Input from '../../../components/form/Input';

class Contact extends Component {
	render(){
		return (
			<DocumentTitle title='Contact | Underbelly Creative'>
			<section className="contact">
				<div className="ghosted">
					<div className="form-wrapper">
						<Form url="/contact-us">
							<Input
								label="Hi, my name is"
								name="name"
								placeholder="your name"
								value=""
								validations="isLength:3"
							/>
							<Input
								label="My email address is"
								name="email"
								placeholder="your email"
								value=""
								validations="isEmail"
							/>
						</Form>
					</div>
					<div className="contact-info">
						<ul>
							<li className="phone">810.738.4977</li>
							<li className="email">hello@underbelly.is</li>
							<li className="address">378 W Broadway #3, Salt Lake City, UT 84101</li>
						</ul>
					</div>
				</div>
			</section>
			</DocumentTitle>
		)
	}
};

export default Contact;