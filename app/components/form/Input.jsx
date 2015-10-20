import React from 'react';
import Formsy from 'formsy-react';

const Input = React.createClass({
	mixins: [Formsy.Mixin],

	changeValue: function (event) {
		this.setValue(event.currentTarget.value);
	},
	render: function() {
		const className = this.showRequired() ? 'required' : this.showError() ? 'error' : null;

		const errorMessage = this.getErrorMessage();
		return (
			<div className={`form-group ${className}`} >
				<label htmlFor={this.props.name}>{this.props.title}</label>
				<input
					type={this.props.type || 'text'}
					name={this.props.name}
					onChange ={this.changeValue}
					value={this.getValue()}
					placeholder={this.props.placeholder}
				/>
				<span className="validation-error">{errorMessage}</span>
			</div>
		);
	}
});

export default Input;