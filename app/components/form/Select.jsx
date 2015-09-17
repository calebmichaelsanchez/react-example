import React from 'react'

class Select extends React.Component {
	constructor(props) {
		super(props);
		this.state = { selected: '' }
	}
	setSelected(event) {
		this.setState({
			selected: event.currentTarget.value
		});
	}
	render() {
		var options = {
			a: "Option A",
			b: "Option B",
			c: "Option C"
		}
		return (
			<div className="form-group">
				<label htmlFor="{this.props.name}">{this.props.label}</label>
				<select value={this.state.selected} />
				</select>
			</div>
		);
	}
}

export default Select