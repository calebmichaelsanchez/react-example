import React, { Component } from 'react';

class Icon extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		var iconName = '';
		var iconSvg = '';
		var theme = '';
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
			case 'brand':
				iconName = 'brand';
				iconSvg = require('../../../assets/img/icons/brand.svg');
				break;
			case 'dev':
				iconName = 'dev';
				iconSvg = require('../../../assets/img/icons/dev.svg');
				break;
			case 'ux':
				iconName = 'ux';
				iconSvg = require('../../../assets/img/icons/ux.svg');
				break;
			case 'arrow':
				theme = 'light'
				iconName = 'arrow';
				iconSvg = require('../../../assets/img/icons/arrow.svg');
				break;
			case 'underbelly':
				iconName = 'underbelly';
				iconSvg = require('../../../assets/img/icons/logotype.svg');
				break;
			case 'instagram':
				iconName = 'instagram';
				iconSvg = require('../../../assets/img/icons/instagram.svg');
				break;
			case 'twitter':
				iconName = 'twitter';
				iconSvg = require('../../../assets/img/icons/twitter.svg');
				break;
			case 'dribbble':
				iconName = 'dribbble';
				iconSvg = require('../../../assets/img/icons/dribbble.svg');
				break;
		}
		return (
			<div className={`icon icon-${iconName} ${theme}`} dangerouslySetInnerHTML={{__html: iconSvg}} />
		);
	}
}

export default Icon;