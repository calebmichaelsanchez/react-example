import React from 'react';

class Form extends React.Component {
	constructor(props) {
		super(props);
		this.inputs = {};
		this.model = {};
		this.registerInputs = this.registerInputs.bind(this);
		this.attachToForm = this.attachToForm.bind(this);
		this.detachFromForm = this.detachFromForm.bind(this);
		this.updateModel = this.updateModel.bind(this);
		this.submit = this.submit.bind(this);
		this.registerInputs(this.props.children);
	}
	registerInputs(children) {
		React.Children.map(children, (child) => {
			if (child.props.name) {
        child.props.attachToForm = this.attachToForm;
        child.props.detachFromForm = this.detachFromForm;
			}
		});
	}
	attachToForm(component) {
		this.inputs[component.props.name] = component;
		this.model[component.props.name] = component.state.value;
		console.log(this.inputs);
		console.log(this.model);
	}
	detachFromForm(component) {
		delete this.inputs[component.props.name];
		delete this.model[component.props.name];
	}
	updateModel() {
		console.log("updateModel()");
		console.log(this.inputs);
		Object.keys(this.inputs).forEach((name) => {
			var component = this.inputs[name];
			console.log("This is the name: " + name);
			this.model[name] = component.state.value;
		});
		console.log("This is the model: ", this.model[name]);
	}
	submit(event) {
		event.preventDefault();
		this.updateModel();
		console.log(this.model);
	}
	render() {
		return (
			<form onSubmit={this.submit}>
				{this.props.children}
				<button type="submit">Send your message</button>
			</form>
		);
	}
}

export default Form