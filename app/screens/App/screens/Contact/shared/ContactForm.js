import React from 'react';
import Form from './Form';
import Input from './Input';

class ContactForm extends React.Component {
	render() {
		return (
			<Form>
				<Input label="Hi, my name is" name="name" placeholder="your name" />
				<Input label="My email address is" name="email" placeholder="your email" />
			</Form>
		)
	}
}

export default ContactForm