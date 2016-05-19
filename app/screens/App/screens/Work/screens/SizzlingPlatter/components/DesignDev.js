import React, { Component } from 'react';
import ReactDom, { findDOMNode } from 'react-dom';
import helpers from "../../../../../../../shared/util/helpers";
import PhoneSlider from '../../../shared/PhoneSlider';
import { backgroundImagesArray, screenImagesArray, phoneImg } from '../Data'

class DesignDev extends Component {
  constructor(props) {
    super(props);

    this.onScroll = this.onScroll.bind(this);
    this.onResize = this.onResize.bind(this);
    this.update   = this.update.bind(this);
  }
  componentDidMount() {
    this.ticking = false;
    this.element = findDOMNode(this.refs.designDev);
    this.height = this.element.clientHeight;
    this.dimensions = {};
    this.designDevNodes = document.querySelectorAll(".squarespace__item"); // html collection
    this.designDevArray = [...this.designDevNodes]; // assures we are working with an array

    window.addEventListener("scroll", this.onScroll, false);
    window.addEventListener("resize", this.onResize, false);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll, false);
    window.removeEventListener("resize", this.onResize, false);
  }
  onScroll() {
    this.dimensions = this.element.getBoundingClientRect(); // getting the tbrl values. 
    // when top is 0, element is at top of viewport
    if (!this.ticking) {
      window.requestAnimFrame(this.update); // helper to throttle and ensure 60fps
      this.ticking = true;
    }
  }
  onResize() {
    this.dimensions      = this.element.getBoundingClientRect();
    this.height          = this.element.clientHeight;
    if (!this.ticking) {
      window.requestAnimFrame(this.update);
      this.ticking = true;
    }
  }
  update() {
    // the magic method
    let { viewportHeight, windowWidth } = this.props,
        { transformThreeD, position } = helpers,
        designDevTop    = this.dimensions.top,
        designDevBottom = this.dimensions.bottom,
        designDevHeight = this.height,
        context    = (designDevTop - viewportHeight) * -1, // handling for when top scrolls up from the bottom (at hits bottom of screen)
        relativeY  = (context / (designDevHeight * 2)), // accounts for the element scrolling above top fold 
        values     = []; // [[y],[x]]

    (windowWidth <= 768) ? values = [ [0], [-50, -75] ] : values = [ [-100], [-50, -125] ];

    (context >= viewportHeight / 2.5) ? this.element.classList.add("active") : this.element.classList.remove("active");

    if (context >= 0 && designDevBottom >= 0) {
      // transformThreeD(element, x, xUnit, y, yUnit, z, zUnit)
      transformThreeD(this.designDevArray[0], values[1][0], "%", position(values[0][0], values[1][1], relativeY,  0), "px", 0, "px");
      transformThreeD(this.designDevArray[1], values[1][0], "%", position(values[0][0], values[1][1], relativeY,  0) * -0.5, "px", 0, "px"); // * -1 makes the y positioning inverse
      transformThreeD(this.designDevArray[2], values[1][0], "%", position(values[0][0], values[1][1], relativeY,  0), "px", 0, "px");
    }
    this.ticking = false;
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
        
      </div>
    )
  }
}

export default DesignDev;
