import React, { Component } from 'react';
var plusIcon = require('../../../assets/img/icons/plus.svg');

class Plus extends Component {
	render() {
		return (
			<div className="icon icon-plus" dangerouslySetInnerHTML={{__html: plusIcon}} />
		);
	}
}

export default Plus;