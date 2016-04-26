import React, { Component } from "react";
import ReactDOM, { findDOMNode } from "react-dom";
import Excerpt from "../shared/Excerpt";
import helpers from "../../../../../../../shared/util/helpers";

class WebMobile extends Component {
  constructor(props) {
    super(props);
    this.onScroll           = this.onScroll.bind(this);
    this.updateElements     = this.updateElements.bind(this);
    this.position           = this.position.bind(this);
    this.limit              = this.limit.bind(this);
    this.isInViewport       = this.isInViewport.bind(this);
    this.setPaddingTop      = this.setPaddingTop.bind(this);
  }
  componentDidMount() {
    this.ticking           = false;
    this.element           = findDOMNode(this.refs.iconsContainer);
    this.elementHeight     = this.element.clientHeight;
    this.elementDimensions = 0;
    this.icons             = document.querySelectorAll(".campus-icons__container");
    this.iconsArray        = [...this.icons];

    this.setPaddingTop();

    window.addEventListener("scroll", this.onScroll, false);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll, false);
  }
  onResize() {
    this.elementDimensions = this.element.getBoundingClientRect();
    window.requestAnimationFrame(this.updateElements);
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
        iconsHeight                 = this.elementHeight,
        iconsTop                    = this.elementDimensions.top,
        iconsBottom                 = this.elementDimensions.bottom,
        context                     = ( (iconsTop + 200) - viewportHeight) * -1,
        relativeY                   = context / (iconsHeight + viewportHeight),
        fastest                     = relativeY * 1,
        middle                      = relativeY * .8,
        slowest                     = relativeY * .65;

    if (context >= 0 && iconsBottom >= 0) {
      this.iconsArray[0].style.transform  = `translate3d( 0px, ${this.position(0, 150, slowest,   0)}px, 0)`;
      this.iconsArray[1].style.transform  = `translate3d( 0px, ${this.position(0, 150, fastest,   0)}px, 0)`;
      this.iconsArray[2].style.transform  = `translate3d( 0px, ${this.position(0, 150, fastest,   0)}px, 0)`;
      this.iconsArray[3].style.transform  = `translate3d( 0px, ${this.position(0, 150, slowest,   0)}px, 0)`;
      this.iconsArray[4].style.transform  = `translate3d( 0px, ${this.position(0, 150, slowest,   0)}px, 0)`;
      this.iconsArray[5].style.transform  = `translate3d( 0px, ${this.position(0, 150, relativeY, 0)}px, 0)`;
      this.iconsArray[6].style.transform  = `translate3d( 0px, ${this.position(0, 150, fastest,   0)}px, 0)`;
      this.iconsArray[7].style.transform  = `translate3d( 0px, ${this.position(0, 150, slowest,   0)}px, 0)`;
      this.iconsArray[8].style.transform  = `translate3d( 0px, ${this.position(0, 150, middle,    0)}px, 0)`;
      this.iconsArray[9].style.transform  = `translate3d( 0px, ${this.position(0, 150, slowest,   0)}px, 0)`;
      this.iconsArray[10].style.transform = `translate3d( 0px, ${this.position(0, 150, relativeY, 0)}px, 0)`;
      this.iconsArray[11].style.transform = `translate3d( 0px, ${this.position(0, 150, fastest,   0)}px, 0)`;
    }
    this.ticking = false;
  }
  setPaddingTop() {
    let icons = document.querySelectorAll(".campus-icons__container"),
        iconsArray = [...icons],
        i,
        w,
        h;
    for (i = 0; i < iconsArray.length; i++) {
      w = iconsArray[i].childNodes[0].childNodes[0].clientWidth;
      h = iconsArray[i].childNodes[0].childNodes[0].clientHeight;
      iconsArray[i].childNodes[0].style.paddingTop = (w / h) * 100 + "%";
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
    let img = require("../../../../../../../images/work/campus/web-mobile-iphone.png");
    let icons = [
      { name: "pen"        , svg: require("../../../../../../../images/work/campus/icons/illo-pen.svg") },
      { name: "calendar"   , svg: require("../../../../../../../images/work/campus/icons/illo-calendar.svg") },
      { name: "book"       , svg: require("../../../../../../../images/work/campus/icons/illo-book.svg") },
      { name: "calculator" , svg: require("../../../../../../../images/work/campus/icons/illo-calculator.svg") },
      { name: "wallet"     , svg: require("../../../../../../../images/work/campus/icons/illo-wallet.svg") },
      { name: "hat"        , svg: require("../../../../../../../images/work/campus/icons/illo-hat.svg") },
      { name: "backpack"   , svg: require("../../../../../../../images/work/campus/icons/illo-backpack.svg") },
      { name: "glasses"    , svg: require("../../../../../../../images/work/campus/icons/illo-glasses.svg") },
      { name: "pizza"      , svg: require("../../../../../../../images/work/campus/icons/illo-pizza.svg") },
      { name: "pencil"     , svg: require("../../../../../../../images/work/campus/icons/illo-pencil.svg") },
      { name: "notebook"   , svg: require("../../../../../../../images/work/campus/icons/illo-notebook.svg") },
      { name: "headphones" , svg: require("../../../../../../../images/work/campus/icons/illo-headphones.svg") }
    ];
    return (
      <section ref="iconsContainer" className="web-mobile">
        <Excerpt
          title="WEB vs MOBILE"
          excerpt={[
            "Our research focused on the primary audience targeted for The Campus — prospective and current college students. We ultimately determined most users would be using the service via mobile devices, so we chose a “mobile first” approach. The benefit of this approach is two fold. First, it gets the app in the hands of users faster. Secondly, it allowed us to work more efficiently and focused."
          ]}
        />
        <div className="campus-icons">
          {icons.map((icon) => {
            return (
              <div key={icon.name} className={`campus-icons__container campus-icons__container--${icon.name}`}>
                <div className="campus-icon__wrapper">
                  <div
                    ref={icon.name}
                    className="campus-icons__item"
                    dangerouslySetInnerHTML={{ __html: icon.svg }}
                  />
                </div>
              </div>
            )
          })}
        </div>
        <div className="web-mobile-iphone">
          <img src={img} />
        </div>
      </section>
    )
  }
}

export default WebMobile;
