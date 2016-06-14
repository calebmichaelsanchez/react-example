import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import PhoneSlider from '../../../shared/PhoneSlider';
import Squarespace from './Squarespace';

class DesignDev extends Component {
  constructor(props) {
    super(props);
    this.onScroll = this.onScroll.bind(this);
    this.onResize = this.onResize.bind(this);
    this.update   = this.update.bind(this);
  }
  componentDidMount() {
    this.ticking = false;
    this.element = findDOMNode(this.refs.element);
    this.dimensions = this.element.getBoundingClientRect();
    this.viewportHeight = window.innerHeight || document.documentElement.clientHeight;

    window.addEventListener('scroll', this.onScroll, false);
    window.addEventListener('resize', this.onResize, false);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll, false);
    window.removeEventListener('resize', this.onResize, false);
  }
  onScroll() {
    this.dimensions = this.element.getBoundingClientRect();
    if (!this.ticking) {
      window.requestAnimationFrame(this.update);
      this.ticking = true;
    }
  }
  onResize() {
    this.dimensions = this.element.getBoundingClientRect();
    this.viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    if (!this.ticking) {
      window.requestAnimationFrame(this.update);
      this.ticking = true;
    }
  }
  update() {
    let top = this.dimensions.top;
    let context = (top - this.viewportHeight) * -1;

    if (context >= this.viewportHeight * 0.1) {
      this.element.classList.add('fadeInUp--active');
    } else {
      this.element.classList.remove('fadeInUp--active');
    }
    this.ticking = false;
  }
  render() {
    let { designDev } = this.props;
    return (
      <div className="design-dev" ref="designDev">
        <div ref="element" className="fadeInUp design-dev__item">
          <h1>Reaching a Broad Audience</h1>
          <p>It was important to make this revamped site inviting for both investors and potential employees. SPLAT is proud of the cultural diversity within their family. To celebrate this, we wanted to make the site inviting for all audiences. Throughout the site we showcase Sizzling Platter’s investment in their ever expanding SPLAT family, diversity, and strong company values.</p>
        </div>
        <div className="design-dev__item iphone">
          <PhoneSlider
            backgroundImages={designDev.backgroundImagesArray}
            screenImages={designDev.screenImagesArray}
            phone={designDev.phoneImg}
          />
        </div>
        <Squarespace />
      </div>
    );
  }
}

DesignDev.propTypes = {
  'designDev': React.PropTypes.object.isRequired
};

export default DesignDev;
