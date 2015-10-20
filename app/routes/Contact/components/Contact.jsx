import React, { Component } from 'react';
import Formsy from 'formsy-react';
import DocumentTitle from 'react-document-title';
import Form from '../../../components/form/Form';
import Input from '../../../components/form/Input';
import Select from '../../../components/form/Select';

class Contact extends Component {
	constructor(props) {
		super(props);
		this.props.setNavTheme(this.props.theme);
		this.enableButton = this.enableButton.bind(this);
		this.disableButton = this.disableButton.bind(this);
		this.submit = this.submit.bind(this);
		this.state = {
			canSumbmit: false
		}
	}
	enableButton() {
		this.setState({
			canSubmit: true
		});
	}
	disableButton() {
		this.setState({
			canSubmit: false
		});
	}
	submit(data) {
		alert(JSON.stringify(data, null, 4));
	}
	resetForm() {
		this.refs.form.reset();
	}
	render(){
		return (
			<DocumentTitle title='Contact | Underbelly Creative'>
			<section className="contact">
				<div className="ghosted">
					<div className="form-wrapper">
						<h1>Contact Us</h1>
						<Formsy.Form ref="form" onValidSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton}>
							<Input title="Hi! My name is" name="name" placeholder="Name"/>
							<Input title="My email address is" name="email" validations="isEmail" validationError="This is not a valid email" placeholder="Email"/>
							<Select title="I'd like to talk about" startText="Select type of project" type="text" name="type" options={[
									{ value: "general", title: "A general project"},
									{ value: "branding", title: "Building a brand"},
									{ value: "ux-ui", title: "UX/UI Design"},
									{ value: "feelings", title: "My feelings"}
								]}
							/>
							<Select title="My budget is" startText="Select budget" type="text" name="budget" options={[
									{ value: "0", title: "Still being worked out"},
									{ value: "1", title: "$2000 - $5000"},
									{ value: "2", title: "$5000 - $10000"},
									{ value: "3", title: "$10000 - $20000"},
									{ value: "4", title: "$20000+"},
								]}
							/>
							<button type="submit" disable={!this.state.canSubmit}>Submit</button>
						</Formsy.Form>
					</div>
					{/*<div className="contact-info">
						<ul>
							<li className="contact-item contact-item-phone">810.738.4977</li>
							<li className="contact-item contact-item-email">hello@underbelly.is</li>
							<li className="contact-item contact-item-address">378 W Broadway #3, Salt Lake City, UT 84101</li>
						</ul>
					</div>*/}
				</div>
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