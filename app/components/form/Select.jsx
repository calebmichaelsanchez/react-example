import React from 'react/addons'
import classNames from 'classnames';
import Onclickoutside from 'react-onclickoutside';

const Select = React.createClass ({
	mixins: [React.addons.LinkedStateMixin],

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
		console.log(event);
		event.preventDefault();
		let input = React.findDOMNode(this.refs.input);
		let currentValue = React.findDOMNode(this.refs.currentValue);
		let selectedValue = event.target.innerHTML;
		currentValue.innerHTML = selectedValue;
		this.setState({ isOpen: false });
		React.addons.TestUtils.Simulate.change(input);
	},
	handleChange: function(event) {
		let val = event
		console.log(event);
	},
	render: function() {
		let value = this.state.value
		const classes = classNames({
			'dropdown-open': this.state.isOpen
		});

		const items = this.props.options.map((option, i) => (
			<li
				key={option.title}
				ref={`option-${i}`}
				onClick={this.handleSelection}>
				{option.title}
			</li>
		));

		return (
			<div className="select">
				<input hidden type={this.props.type || 'text' } name={this.props.name} ref="input" defaultValue={value} onChange={this.handleChange} />
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