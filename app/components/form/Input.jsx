import React from 'react'

class Input extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: this.props.value || ''
		}
		if (this.props.required) {
			this.props.validations = this.props.validations ? this.props.validations + ',' : '';
			this.props.validations += 'isValue'
		}
		this.props.attachToForm(this);
		this.setValue = this.setValue.bind(this);
	}
	componentWillUnmount() {
		this.props.detachFromForm(this);
	}
	setValue() {
		this.setState({
			value: event.target.value
		}, () => {
			this.props.validate(this);
		});
	}
	render() {
		return (
			<input type="text" name={this.props.name} onChange={this.setValue} value={this.state.value} placeholder={this.props.placeholder}/>
		);
	}
}

export default Input