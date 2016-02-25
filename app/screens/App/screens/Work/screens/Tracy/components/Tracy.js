import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';

class Tracy extends Component {
	render() {
		console.log(this);
		return (
			<DocumentTitle title="Tracy | Underbelly Creative">
				<h1>Tracy</h1>
			</DocumentTitle>
		);
	}
}

export default Tracy;