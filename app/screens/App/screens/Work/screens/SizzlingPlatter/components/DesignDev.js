import React, { Component } from 'react';
import PhoneSlider from '../../../shared/PhoneSlider';
import Squarespace from './Squarespace';
import { backgroundImagesArray, screenImagesArray, phoneImg } from '../Data'

class DesignDev extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let { designDev } = this.props;
    return (
      <div className="design--dev" ref="designDev">
        <div className="design--dev__item copy-01">
          <h1>MADE TO ORDER</h1>
          <p>It was important to make this revamped site inviting for both investors and potential employees. SPLAT is poud of the cultural diversity within their family. To celebrate this, we wanted to make the site inviting for all audiences. Throughout the site we showcase Sizzling Platter’s investment in their ever expanding SPLAT family, diversity, and strong company values.</p>
        </div>

        <div className="design--dev__item iphone">
          <PhoneSlider backgroundImages={backgroundImagesArray} screenImages={screenImagesArray} phone={phoneImg} />
        </div>

        <Squarespace {...this.props} />
        
      </div>
    )
  }
}

export default DesignDev;
