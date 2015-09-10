import React from 'react'

class Input extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: this.props.value || ''
		}
		this.props.attachToForm(this);
		this.setValue = this.setValue.bind(this);
	}
	componentWillMount() {
		this.props.detachFromForm(this);
	}
	setValue() {
		this.setState({
			value: event.target.value
		});
	}
	render() {
		return (
			<div>
			<pre>{JSON.stringify(this.state, undefined, 2)}</pre>
				<input type="text" name={this.props.name} onChange={this.setValue} value={this.state.value} placeholder={this.props.placeholder}/>
			</div>
		);
	}
}

export default Input