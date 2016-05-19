import React, { Component } from 'react';
import ReactDom, { findDOMNode } from 'react-dom';
import helpers from "../../../../../../../shared/util/helpers";
import { img, icons } from '../Data'

class Squarespace extends Component {
  constructor(props) {
    super(props);

    this.onScroll       = this.onScroll.bind(this);
    this.updateElements = this.updateElements.bind(this);
    this.position       = this.position.bind(this);
    this.limit          = this.limit.bind(this);
    this.isInViewport   = this.isInViewport.bind(this);
    this.onResize       = this.onResize.bind(this);
    this.setIconSize    = this.setIconSize.bind(this);
  }
  componentDidMount() {
    this.ticking           = false;
    this.element           = findDOMNode(this.refs.squarespace);
    this.elementHeight     = this.element.clientHeight;
    this.elementDimensions = 0;
    this.icons      = document.querySelectorAll(".squarespace--parallax__container");
    this.iconsArray = [...this.icons];

    this.setIconSize();

    window.addEventListener("scroll", this.onScroll, false);
    window.addEventListener("resize", this.onResize, false);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll, false);
    window.removeEventListener("resize", this.onResize, false);
  }
  onResize() {
    this.elementDimensions = this.element.getBoundingClientRect();
    this.elementHeight = this.element.clientHeight;
    if(!this.ticking) {
      window.requestAnimationFrame(this.updateElements);
      this.ticking = true;
    }
  }
  onScroll() {
    this.elementDimensions = this.element.getBoundingClientRect();

    if(!this.ticking) {
      window.requestAnimationFrame(this.updateElements);
      this.ticking = true;
    }
  }
  updateElements() {
    let { viewportHeight } = this.props,
        iconsHeight        = this.elementHeight,
        iconsTop           = this.elementDimensions.top,
        iconsBottom        = this.elementDimensions.bottom,
        context            = ( (iconsTop + 200) - viewportHeight) * -1,
        relativeY          = context / (iconsHeight + viewportHeight),
        fastest            = relativeY * 1,
        middle             = relativeY * .8,
        slowest            = relativeY * .65;

    if (context >= 0 && iconsBottom >= 0) {
      this.iconsArray[0].style.transform   = `translate3d( 0px, ${this.position(0, 150, slowest,   0)}px, 0)`;
      this.iconsArray[1].style.transform   = `translate3d( 0px, ${this.position(0, 150, fastest,   0)}px, 0)`;
      this.iconsArray[2].style.transform   = `translate3d( 0px, ${this.position(0, 150, fastest,   0)}px, 0)`;
      this.iconsArray[3].style.transform   = `translate3d( 0px, ${this.position(0, 150, middle,   0)}px, 0)`;
      this.iconsArray[4].style.transform   = `translate3d( 0px, ${this.position(0, 150, middle,   0)}px, 0)`;
      this.iconsArray[5].style.transform   = `translate3d( 0px, ${this.position(0, 150, middle,   0)}px, 0)`;
      this.iconsArray[6].style.transform   = `translate3d( 0px, ${this.position(0, 150, fastest,   0)}px, 0)`;
      this.iconsArray[7].style.transform   = `translate3d( 0px, ${this.position(0, 150, slowest,   0)}px, 0)`;
      this.iconsArray[8].style.transform   = `translate3d( 0px, ${this.position(0, 150, middle,   0)}px, 0)`;
      this.iconsArray[9].style.transform   = `translate3d( 0px, ${this.position(0, 150, fastest,   0)}px, 0)`;
      this.iconsArray[10].style.transform  = `translate3d( 0px, ${this.position(0, 150, slowest,   0)}px, 0)`;
      this.iconsArray[11].style.transform  = `translate3d( 0px, ${this.position(0, 150, slowest,   0)}px, 0)`;
      this.iconsArray[12].style.transform  = `translate3d( 0px, ${this.position(0, 150, middle,   0)}px, 0)`;
      this.iconsArray[13].style.transform  = `translate3d( 0px, ${this.position(0, 150, middle,   0)}px, 0)`;
      this.iconsArray[14].style.transform  = `translate3d( 0px, ${this.position(0, 150, middle,   0)}px, 0)`;
      this.iconsArray[15].style.transform  = `translate3d( 0px, ${this.position(0, 150, middle,   0)}px, 0)`;
      this.iconsArray[16].style.transform  = `translate3d( 0px, ${this.position(0, 150, slowest,   0)}px, 0)`;
      this.iconsArray[17].style.transform  = `translate3d( 0px, ${this.position(0, 150, slowest,   0)}px, 0)`;
      this.iconsArray[18].style.transform  = `translate3d( 0px, ${this.position(0, 150, slowest,   0)}px, 0)`;
    }
    this.ticking = false;
  }
  setIconSize() {
    let icons = document.querySelectorAll(".squarespace--parallax svg"),
        iconsContainer = document.querySelectorAll(".squarespace--parallax__container"),
        iconsWrapper = document.querySelectorAll(".squarespace--parallax__item"),
        iconsArray = [...icons],
        iconsContainerArray = [...iconsContainer],
        iconsWrapperArray = [...iconsWrapper],
        i, w, h;
    for (i = 0; i < iconsArray.length; i++) {
      w = iconsArray[i].viewBox.baseVal.width;
      h = iconsArray[i].viewBox.baseVal.height;
      iconsContainer[i].style.width = ((w / 1300) * 100) + "%";
      iconsContainer[i].style.height = ((h / 960) * 100) + "%";
      iconsWrapperArray[i].style.paddingBottom = (h / w) * 100 + "%";
    }
  }
  position(base, range, relativeY, offset) {
    return base + this.limit(0, 1, relativeY - offset) * range;
  }
  limit(min, max, value) {
    return Math.max(min, Math.min(max, value));
  }
  isInViewport(elem) {
    let distance = elem.getBoundingClientRect(), { viewportHeight } = this.props;
    return (distance.bottom > 0 && distance.top < viewportHeight);
  }
  render() {
    let { squarespace } = img;
    return (
      <div className="" ref="squarespace">
        <img className="ss" src={squarespace.logo} />
        <div className="design--dev__item squarespace">
          <h1>CUSTOM EXPERIENCE <br />VIA SQUARESPACE</h1>
          <p>We chose Squarespace for our content management system to allow easy modification with a great custom design. Although the Squarespace Development Platform is still in its infancy, the development team was able to pour though documentation to create a beautiful website that combines Squarespace’s wonderful backend with React based front-end. Using React in conjunction with Axios we were able to leverage the way Squarespace exposes site data to create clean, reusable components.</p>
          <div className="squarespace--parallax">
            {icons.map((icon) => {
              return (
                <div key={icon.name} className={`squarespace--parallax__container squarespace--parallax__container--${icon.name}`}>
                  <div
                    ref={icon.name}
                    className="squarespace--parallax__item"
                    dangerouslySetInnerHTML={{ __html: icon.svg }}
                  />
                </div>
              )
            })}
          </div>
        </div>

        <div className="design--dev__item laptop">
          <img src={squarespace.laptop} />
        </div>

        <div className="design--dev__item copy-03">
          <h1>SERVING THE PEOPLE</h1>
          <p>One of our primary goals for the Sizzling Platter redesign was to highlight their focus on company culture. Sizzling Platter strives to uphold a diverse culture and strong core values from the highest level of stakeholder to potential employees. By tying in human elements throughout the site, we hope the SPLAT culture resonates with visitors as much as it did with our team!</p>
          <p><a href="http://sizzlingplatter.com/" className="button button--red button--lg">See it live</a></p>
        </div>
      </div>
    )
  }
}

export default Squarespace;
