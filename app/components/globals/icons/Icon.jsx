import React, { Component } from 'react';

class Icon extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		var iconName = '';
		var iconSvg = '';
		var theme = '';
		var type = '';
		switch (this.props.icon) {
			case 'plus':
				iconName = 'plus';
				iconSvg = require('./plus.svg');
				break;
			case 'monstro':
				iconName = 'monstro';
				iconSvg = require('./monstro.svg');
				break;
			case 'airplane':
				iconName = 'airplane';
				iconSvg = require('./airplane.svg');
				break;
			case 'brand':
				iconName = 'brand';
				iconSvg = require('./brand.svg');
				break;
			case 'dev':
				iconName = 'dev';
				iconSvg = require('./dev.svg');
				break;
			case 'ux':
				iconName = 'ux';
				iconSvg = require('./ux.svg');
				break;
			case 'arrow':
				type = this.props.type
				theme = this.props.theme
				iconName = 'arrow';
				iconSvg = require('./arrow.svg');
				break;
			case 'underbelly':
				iconName = 'underbelly';
				iconSvg = require('./logotype.svg');
				break;
			case 'instagram':
				iconName = 'instagram';
				iconSvg = require('./instagram.svg');
				break;
			case 'twitter':
				iconName = 'twitter';
				iconSvg = require('./twitter.svg');
				break;
			case 'dribbble':
				iconName = 'dribbble';
				iconSvg = require('./dribbble.svg');
				break;
		}
		return (
			<div className={`icon icon-${iconName} ${theme} ${type}`}>
				<svg dangerouslySetInnerHTML={{__html: iconSvg}}></svg>
			</div>
		);
	}
}

export default Icon;