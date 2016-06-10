import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import helpers from '../../../../../../../shared/util/helpers';
import { images, icons } from '../Data';

class Squarespace extends Component {
  constructor(props) {
    super(props);

    this.onScroll       = this.onScroll.bind(this);
    this.update         = this.update.bind(this);
    this.onResize       = this.onResize.bind(this);
  }
  componentDidMount() {
    this.ticking           = false;
    this.element           = findDOMNode(this.refs.squarespace);
    this.elementHeight     = this.element.clientHeight;
    this.elementDimensions = {};
    this.icons             = document.querySelectorAll('.squarespace__parallax__container');
    this.iconsArray        = [...this.icons];

    this.context1 = findDOMNode(this.refs.context1);
    this.context2 = findDOMNode(this.refs.context2);

    window.addEventListener('scroll', this.onScroll, false);
    window.addEventListener('resize', this.onResize, false);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll, false);
    window.removeEventListener('resize', this.onResize, false);
  }
  onResize() {
    this.elementDimensions  = this.element.getBoundingClientRect();
    this.context1Dimensions = this.context1.getBoundingClientRect();
    this.context2Dimensions = this.context2.getBoundingClientRect();
    this.elementHeight      = this.element.clientHeight;
    if (!this.ticking) {
      window.requestAnimationFrame(this.update);
      this.ticking = true;
    }
  }
  onScroll() {
    this.elementDimensions  = this.element.getBoundingClientRect();
    this.context1Dimensions = this.context1.getBoundingClientRect();
    this.context2Dimensions = this.context2.getBoundingClientRect();
    if (!this.ticking) {
      window.requestAnimationFrame(this.update);
      this.ticking = true;
    }
  }
  setActiveClass(context, element, viewportHeight) {
    if (context >= viewportHeight * 0.1) {
      element.classList.add('fadeInUp--active');
    } else {
      element.classList.remove('fadeInUp--active');
    }
  }
  update() {
    let { viewportHeight } = this.props;
    let { transformThreeD, position } = helpers;
    let iconsHeight        = this.elementHeight;
    let iconsTop           = this.elementDimensions.top;
    let iconsBottom        = this.elementDimensions.bottom;
    let context            = (iconsTop - viewportHeight) * -1;
    let relativeY          = context / (iconsHeight * 2);
    let fastest            = relativeY * 1;
    let middle             = relativeY * 0.7;
    let slowest            = relativeY * 0.45;

    if (context >= 0 && iconsBottom >= 0) {
      transformThreeD(this.iconsArray[0],  0, 'px', position(0, 80,  slowest, 0), 'px', 0, 'px');
      transformThreeD(this.iconsArray[1],  0, 'px', position(0, 250, fastest, 0), 'px', 0, 'px');
      transformThreeD(this.iconsArray[2],  0, 'px', position(0, 250, fastest, 0), 'px', 0, 'px');
      transformThreeD(this.iconsArray[3],  0, 'px', position(0, 150, middle,  0), 'px', 0, 'px');
      transformThreeD(this.iconsArray[4],  0, 'px', position(0, 150, middle,  0), 'px', 0, 'px');
      transformThreeD(this.iconsArray[5],  0, 'px', position(0, 150, middle,  0), 'px', 0, 'px');
      transformThreeD(this.iconsArray[6],  0, 'px', position(0, 250, fastest, 0), 'px', 0, 'px');
      transformThreeD(this.iconsArray[7],  0, 'px', position(0, 80,  slowest, 0), 'px', 0, 'px');
      transformThreeD(this.iconsArray[8],  0, 'px', position(0, 150, middle,  0), 'px', 0, 'px');
      transformThreeD(this.iconsArray[9],  0, 'px', position(0, 250, fastest, 0), 'px', 0, 'px');
      transformThreeD(this.iconsArray[10], 0, 'px', position(0, 80,  slowest, 0), 'px', 0, 'px');
      transformThreeD(this.iconsArray[11], 0, 'px', position(0, 80,  slowest, 0), 'px', 0, 'px');
      transformThreeD(this.iconsArray[12], 0, 'px', position(0, 150, middle,  0), 'px', 0, 'px');
      transformThreeD(this.iconsArray[13], 0, 'px', position(0, 150, middle,  0), 'px', 0, 'px');
      transformThreeD(this.iconsArray[14], 0, 'px', position(0, 150, middle,  0), 'px', 0, 'px');
      transformThreeD(this.iconsArray[15], 0, 'px', position(0, 150, middle,  0), 'px', 0, 'px');
      transformThreeD(this.iconsArray[16], 0, 'px', position(0, 80,  slowest, 0), 'px', 0, 'px');
      transformThreeD(this.iconsArray[17], 0, 'px', position(0, 80,  slowest, 0), 'px', 0, 'px');
      transformThreeD(this.iconsArray[18], 0, 'px', position(0, 80,  slowest, 0), 'px', 0, 'px');
    }

    let context1Top = (this.context1Dimensions.top - viewportHeight) * -1;
    let context2Top = (this.context2Dimensions.top - viewportHeight) * -1;

    this.setActiveClass(context1Top, this.context1, viewportHeight);
    this.setActiveClass(context2Top, this.context2, viewportHeight);

    this.ticking = false;
  }
  render() {
    let {squarespace} = images;
    return (
      <div className="squarespace">
        <div ref="context1" className="fadeInUp squarespace__item">
          <img className="squarespace__item-img" src={squarespace.logo} />
          <h1>Custom Experience <br />Via Squarespace</h1>
          <p>We chose Squarespace for our content management system to allow easy modification with a great custom design. Although the Squarespace Development Platform is still in its infancy, the development team was able to pour though documentation to create a beautiful website that combines Squarespace’s wonderful backend with React based front-end. Using React in conjunction with Axios we were able to leverage the way Squarespace exposes site data to create clean, reusable components.</p>
        </div>
        <div ref="squarespace" className="squarespace__parallax">
          {icons.map(icon =>
            <div key={icon.name} className={`squarespace__parallax__container squarespace__parallax__container--${icon.name}`}>
              <div ref={icon.name} className="squarespace__parallax__item">
                <img src={icon.svg} />
              </div>
            </div>
          )}
        </div>
        <div className="squarespace__item squarespace__item-laptop">
          <img src={squarespace.laptop} />
        </div>
        <div ref="context2" className="fadeInUp squarespace__item">
          <h1>Delivering On Our Promises</h1>
          <p>One of our primary goals for the Sizzling Platter redesign was to highlight their focus on company culture. Sizzling Platter strives to uphold a diverse culture and strong core values from the highest level of stakeholder to potential employees. By tying in human elements throughout the site, we hope the SPLAT culture resonates with visitors as much as it did with our team!</p>
          <a href="http://sizzlingplatter.com/" className="button">See it live</a>
        </div>
      </div>
    );
  }
}

Squarespace.propTypes = {
  'viewportHeight': React.PropTypes.number.isRequired
};

export default Squarespace;
