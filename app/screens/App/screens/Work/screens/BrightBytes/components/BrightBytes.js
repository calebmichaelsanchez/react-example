import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';

class BrightBytes extends Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		this.props.setNavTheme(this.props.theme);
	}
	render() {
		return (
			<DocumentTitle title="Bright Bytes | Underbelly Creative">
				<h1>Bright Bytes</h1>
			</DocumentTitle>
		);
	}
}

export default BrightBytes;