import React, { Component } from 'react';

class Icon extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let iconName = '';
    let iconSvg  = '';
    let theme    = '';
    let type     = '';
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
      type = this.props.type;
      theme = this.props.theme;
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
    case 'computer':
      iconName = 'computer';
      iconSvg = require('./computer.svg');
      break;
    case 'building':
      iconName = 'building';
      iconSvg = require('./building.svg');
      break;
    case 'phone':
      iconName = 'phone';
      iconSvg = require('./phone.svg');
      break;
    case 'facebook':
      iconName = 'facebook';
      iconSvg = require('./facebook.svg');
      break;
    case 'checkmark':
      iconName = 'checkmark';
      iconSvg = require('./checkmark.svg');
      break;
    default :
      iconName = 'checkmark';
      iconSvg = require('./checkmark.svg');
    }
    return (
      <div className={`icon icon-${iconName} ${theme} ${type}`} dangerouslySetInnerHTML={{ '__html': iconSvg }} />
    );
  }
}

Icon.propTypes = {
  'icon': React.PropTypes.string.isRequired,
  'type': React.PropTypes.string,
  'theme': React.PropTypes.string
};

export default Icon;
