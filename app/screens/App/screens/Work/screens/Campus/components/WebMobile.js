import React, { Component } from "react";
import ReactDOM, { findDOMNode } from "react-dom";
import Excerpt from "../shared/Excerpt";

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
  onScroll() {
    window.requestAnimationFrame(this.updateElements);
  }
  updateElements() {
    let { pageYOffset, viewportHeight } = this.props,
        iconsContainer              = findDOMNode(this.refs.iconsContainer),
        iconsHeight                 = iconsContainer.clientHeight,
        icons                       = document.querySelectorAll(".campus-icons__container"),
        iconsArray                  = [...icons],
        distanceTop                 = iconsContainer.getBoundingClientRect().top,
        // containers distance from the top of the viewport
        context                     = (distanceTop - viewportHeight) * -1,
        // containers distance from the bottom of the viewport
        relativeY                   = (context - 200) / (iconsHeight * 4),
         // offsets context 200 pixes and divides by height of container * 4
         // this gives us our value to set translate position with
        fastest                     = relativeY * 2,
        middle                      = relativeY * 1.5,
        slowest                     = relativeY * .5;
        // these last three values essentially set different scroll
        // speeds, by multiplying the value of relativeY

    if (this.isInViewport(iconsContainer)) {
      iconsArray[0].style.transform  = `translate3d( 0px, ${this.position(0, 120, slowest,   0)}px, 0)`;
      iconsArray[1].style.transform  = `translate3d( 0px, ${this.position(0, 120, fastest,   0)}px, 0)`;
      iconsArray[2].style.transform  = `translate3d( 0px, ${this.position(0, 120, fastest,   0)}px, 0)`;
      iconsArray[3].style.transform  = `translate3d( 0px, ${this.position(0, 120, slowest,   0)}px, 0)`;
      iconsArray[4].style.transform  = `translate3d( 0px, ${this.position(0, 120, slowest,   0)}px, 0)`;
      iconsArray[5].style.transform  = `translate3d( 0px, ${this.position(0, 120, relativeY, 0)}px, 0)`;
      iconsArray[6].style.transform  = `translate3d( 0px, ${this.position(0, 120, fastest,   0)}px, 0)`;
      iconsArray[7].style.transform  = `translate3d( 0px, ${this.position(0, 120, slowest,   0)}px, 0)`;
      iconsArray[8].style.transform  = `translate3d( 0px, ${this.position(0, 120, middle,    0)}px, 0)`;
      iconsArray[9].style.transform  = `translate3d( 0px, ${this.position(0, 120, slowest,   0)}px, 0)`;
      iconsArray[10].style.transform = `translate3d( 0px, ${this.position(0, 120, relativeY, 0)}px, 0)`;
      iconsArray[11].style.transform = `translate3d( 0px, ${this.position(0, 120, fastest,   0)}px, 0)`;
    }
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
  componentDidMount() {
    this.setPaddingTop();
    window.addEventListener("scroll", this.onScroll, false);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll, false);
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
