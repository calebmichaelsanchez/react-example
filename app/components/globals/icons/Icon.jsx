import React, { Component } from 'react';
var plusIcon = require('../../../assets/img/icons/plus.svg');

class Icon extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		var iconName = '';
		var iconSvg = '';
		switch (this.props.icon) {
			case 'plus':
				iconName = 'plus';
				iconSvg = require('../../../assets/img/icons/plus.svg');
				break;
			case 'monstro':
				iconName = 'monstro';
				iconSvg = require('../../../assets/img/icons/monstro.svg');
				break;
			case 'airplane':
				iconName = 'airplane';
				iconSvg = require('../../../assets/img/icons/airplane.svg');
				break;
		}
		return (
			<div
				className={"icon icon-" + iconName }
				dangerouslySetInnerHTML={{__html: iconSvg}}
			/>
		);
	}
}

export default Icon;