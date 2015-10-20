import React from 'react/addons'
import Formsy from 'formsy-react';
import classNames from 'classnames';
import Onclickoutside from 'react-onclickoutside';

const Select = React.createClass ({
	mixins: [Formsy.Mixin, Onclickoutside],
	getInitialState: function() {
		return {
			isOpen: false,
			value: '' };
	},
	handleClickOutside: function(event) {
		this.setState({ isOpen: false });
	},
	handleClick: function(event) {
		event.preventDefault();
		this.setState({ isOpen: !this.state.isOpen });
	},
	handleSelection: function(event) {
		event.preventDefault();
		let input = React.findDOMNode(this.refs.input);
		let currentValue = React.findDOMNode(this.refs.currentValue);
		let selectedValue = event.target.innerHTML;
		currentValue.innerHTML = selectedValue;
		input.value = selectedValue;
		this.setState({ isOpen: false });
		React.addons.TestUtils.Simulate.change(input);
	},
	changeValue: function(event) {
		console.log(event.currentTarget.value);
		this.setValue(event.currentTarget.value);
		//this.setState({ value: event.currentTarget.value });
	},
	render: function() {
		const classes = classNames({
			'dropdown-open': this.state.isOpen
		});
		const className = this.props.className + ' ' + (this.showRequired() ? 'require' : this.showError() ? 'error' : null);
		const errorMessage = this.getErrorMessage();

		const items = this.props.options.map((option, i) => (
			<li
				key={option.title+option.value}
				ref={`option-${i}`}
				onClick={this.handleSelection}>{option.title}
			</li>
		));

		return (
			<div className="form-group">
				<label htmlFor={this.props.name}>{this.props.title}</label>
				<input
					hidden
					type={this.props.type || 'text' }
					name={this.props.name}
					ref="input"
					value={this.getValue()}
					onChange={this.changeValue}
				/>
				<dl ref="selectMenuContainer" className={`dropdown ${classes}`}>
					<dt ref="currentValue" onClick={this.handleClick}>{this.props.startText}</dt>
					<dd>
						<ul>{items}</ul>
					</dd>
				</dl>
			</div>
		);
	}
});

export default Select