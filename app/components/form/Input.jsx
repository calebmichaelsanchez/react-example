import React from 'react/addons';
import Formsy from 'formsy-react';

const Input = React.createClass({
	mixins: [Formsy.Mixin, React.addons.LinkedStateMixin],

	changeValue (event) {
		this.setValue(event.currentTarget[this.props.type === 'checkbox' ? 'checked' : 'value']);
	},
	handleCheck (event) {
		let checkbox = React.findDOMNode(this.refs.checkbox);
		console.log(event.target);
		React.addons.TestUtils.Simulate.change(checkbox, {"target": {"checked": true}});
	},
	render() {
		//const className = this.props.className + ' ' + (this.showRequired() ? 'required' : this.showError() ? 'error' : null);
		const className = this.showRequired() ? 'required' : this.showError() ? 'error' : null;

		const errorMessage = this.getErrorMessage();
		return (
			<div className={`form-group ${className} ${this.props.type || 'text'}`} >
				<label htmlFor={this.props.name}>{this.props.title}</label>
				<input
					ref="checkbox"
					type={this.props.type || 'text'}
					name={this.props.name}
					onChange ={this.changeValue}
					value={this.getValue()}
					placeholder={this.props.placeholder}
					checked={this.props.type === 'checkbox' && this.getValue() ? 'checked' : null}
				/>
				<span className="validation-error">{errorMessage}</span>
			</div>
		);
	}
});

export default Input;