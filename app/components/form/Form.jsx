import React from 'react';
import validator from 'validator';
import axios from 'axios';

class Form extends React.Component {
	constructor(props) {
		super(props);
		this.inputs = {};
		this.model = {};
		this.validate = this.validate.bind(this);
		this.validateForm = this.validateForm.bind(this);
		this.attachToForm = this.attachToForm.bind(this);
		this.detachFromForm = this.detachFromForm.bind(this);
		this.updateModel = this.updateModel.bind(this);
		this.submit = this.submit.bind(this);
		this.state = {
			isSubmitting: false,
			isValid: true
		}
	}
	componentDidMount() {
		this.validateForm();
	}
	registerInputs(children) {
		return React.Children.map(children, function (child) {
			if (child.props.name) {
        return React.cloneElement(child, {
        	attachToForm: this.attachToForm,
        	detachFromForm: this.detachFromForm,
        	validate: this.validate
        }, child.props);
			}
		}, this);
	}
	validate(component) {
		if(!component.props.validations) {
			return;
		}
		var isValid = true;

		if (component.props.value || component.props.required) {
			component.props.validations.split(',').forEach((validation) => {
				var args = validation.split(':');
				var validateMethod = args.shift();

				args = args.map(function (arg) {return JSON.parse(arg); });
				args = [component.state.value].concat(args);

				console.log(args);

				if (!validator[validateMethod].apply(validator, args)) {
					isValid = false;
				}
			});
		}
		// component.setState({
		// 	isValid: isValid
		// }, this.validateForm);
	}
	validateForm() {
		var allIsValid: true;

		var inputs = this.inputs;
		Object.keys(inputs).forEach(function(name) {
			if (!inputs[name].state.isValid) {
				allIsValid = false;
			}
		});

		// this.setState({
		// 	isValid: allIsValid
		// });
	}
	updateModel() {
		Object.keys(this.inputs).forEach((name) => {
			var component = this.inputs[name];
			this.model[name] = component.state.value;
		});
	}
	attachToForm(component){
		this.inputs[component.props.name] = component;
		this.model[component.props.name] = component.state.value;

		this.validate(component);
	}
	detachFromForm(component) {
		delete this.inputs[component.props.name];
		delete this.model[component.props.name];
	}
	submit(event) {
		event.preventDefault();
		this.setState({
			isSubmitting: true
		});
		this.updateModel();
		console.log(this.model);
		// put ajax call to node here
		axios.post(this.props.url, this.model)
			.then(function(response) {
				console.log(response);
			})
			.catch(function(response) {
				console.log(response)
			});
	}
	render() {
		return (
			<form {...this.props} onSubmit={this.submit}>
				{this.registerInputs(this.props.children)}
				<button type="submit" disabled={this.state.isSubmitting}>Send your message</button>
			</form>
		);
	}
}

export default Form;