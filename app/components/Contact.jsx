import React from 'react';
import DocumentTitle from 'react-document-title';
import Form from './form/Form';
import Input from './form/Input';

class Contact extends React.Component {
	render(){
		return (
			<DocumentTitle title='Contact: Underbelly Creative'>
			<section className="contact">
				<div className="ghosted">
					<div className="form-wrapper">
						<Form>
							<Input label="Hi, my name is" name="name" placeholder="your name" value="" />
							<Input label="My email address is" name="email" placeholder="your email" value="" />
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