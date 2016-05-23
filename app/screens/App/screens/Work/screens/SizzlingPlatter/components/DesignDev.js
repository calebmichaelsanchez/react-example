import React, { Component } from 'react';
import PhoneSlider from '../../../shared/PhoneSlider';
import Squarespace from './Squarespace';

class DesignDev extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let { designDev } = this.props;
    return (
      <div className="design--dev" ref="designDev">
        <div className="design--dev__item">
          <h1>Made To Order</h1>
          <p>It was important to make this revamped site inviting for both investors and potential employees. SPLAT is poud of the cultural diversity within their family. To celebrate this, we wanted to make the site inviting for all audiences. Throughout the site we showcase Sizzling Platter’s investment in their ever expanding SPLAT family, diversity, and strong company values.</p>
        </div>
        <div className="design--dev__item iphone">
          <PhoneSlider backgroundImages={designDev.backgroundImagesArray} screenImages={designDev.screenImagesArray} phone={designDev.phoneImg} />
        </div>
        <Squarespace viewportHeight={this.props.viewportHeight} />
      </div>
    )
  }
}

export default DesignDev;
