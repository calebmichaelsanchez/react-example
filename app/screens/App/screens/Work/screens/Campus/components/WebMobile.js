import React, { Component } from "react";
import ReactDOM, { findDOMNode } from "react-dom";
import Excerpt from "../shared/Excerpt";
import helpers from "../../../../../../../shared/util/helpers";

class WebMobile extends Component {
  constructor(props) {
    super(props);
    this.onScroll       = this.onScroll.bind(this);
    this.update         = this.update.bind(this);
    this.setPaddingTop  = this.setPaddingTop.bind(this);
    this.onResize       = this.onResize.bind(this);
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
      window.requestAnimationFrame(this.update);
      this.ticking = true;
    }
  }
  onScroll() {
    this.elementDimensions = this.element.getBoundingClientRect();

    if(!this.ticking) {
      window.requestAnimationFrame(this.update);
      this.ticking = true;
    }
  }
  update() {
    let { viewportHeight } = this.props,
        { position, transformThreeD, transformRotate } = helpers,
        iconsHeight = this.elementHeight,
        iconsTop    = this.elementDimensions.top,
        iconsBottom = this.elementDimensions.bottom,
        context     = ( (iconsTop + 200) - viewportHeight) * -1,
        relativeY   = context / (iconsHeight + viewportHeight),
        fastest     = relativeY * 1,
        middle      = relativeY * .8,
        slowest     = relativeY * .65;

    if (context >= 0 && iconsBottom >= 0) {
      transformThreeD(this.iconsArray[0],  "0", "px", position(0, 150, slowest,   0), "px", 0, "px");
      transformThreeD(this.iconsArray[1],  "0", "px", position(0, 150, fastest,   0), "px", 0, "px");
      transformThreeD(this.iconsArray[2],  "0", "px", position(0, 150, fastest,   0), "px", 0, "px");
      transformThreeD(this.iconsArray[3],  "0", "px", position(0, 150, slowest,   0), "px", 0, "px");
      transformThreeD(this.iconsArray[4],  "0", "px", position(0, 150, slowest,   0), "px", 0, "px");
      transformThreeD(this.iconsArray[5],  "0", "px", position(0, 150, relativeY, 0), "px", 0, "px");
      transformThreeD(this.iconsArray[6],  "0", "px", position(0, 150, fastest,   0), "px", 0, "px");
      transformThreeD(this.iconsArray[7],  "0", "px", position(0, 150, slowest,   0), "px", 0, "px");
      transformThreeD(this.iconsArray[8],  "0", "px", position(0, 150, middle,    0), "px", 0, "px");
      transformThreeD(this.iconsArray[9],  "0", "px", position(0, 150, slowest,   0), "px", 0, "px");
      transformThreeD(this.iconsArray[10], "0", "px", position(0, 150, relativeY, 0), "px", 0, "px");
      transformThreeD(this.iconsArray[11], "0", "px", position(0, 150, fastest,   0), "px", 0, "px");

      transformRotate(this.iconsArray[0].children[0],  position(-20, 20, slowest,   0));
      transformRotate(this.iconsArray[1].children[0],  position(-20, 20, fastest,   0));
      transformRotate(this.iconsArray[2].children[0],  position(-20, 20, fastest,   0));
      transformRotate(this.iconsArray[3].children[0],  position(-20, 20, slowest,   0));
      transformRotate(this.iconsArray[4].children[0],  position(-20, 20, slowest,   0));
      transformRotate(this.iconsArray[7].children[0],  position(20, -20, slowest,   0));
      transformRotate(this.iconsArray[8].children[0],  position(20, -20, middle,    0));
      transformRotate(this.iconsArray[9].children[0],  position(20, -20, slowest,   0));
      transformRotate(this.iconsArray[10].children[0], position(20, -20, relativeY, 0));
      transformRotate(this.iconsArray[11].children[0], position(20, -20, fastest,   0));
    }
    this.ticking = false;
  }
  setPaddingTop() {
    let icons = document.querySelectorAll(".campus-icons__container svg"),
        iconsContainer = document.querySelectorAll(".campus-icons__container"),
        iconsWrapper = document.querySelectorAll(".campus-icons__item"),
        iconsArray = [...icons],
        iconsWrapperArray = [...iconsWrapper],
        i, w, h;
    for (i = 0; i < iconsArray.length; i++) {
      w = iconsArray[i].viewBox.baseVal.width;
      h = iconsArray[i].viewBox.baseVal.height;
      iconsContainer[i].style.width = ((w / 1200) * 100) + "%";
      iconsContainer[i].style.height = ((h / 640) * 100) + "%";
      iconsWrapperArray[i].style.paddingBottom = (h / w) * 100 + "%";
    }
  }
  render() {
    let { phone } = this.props.webMobile;
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
          viewportHeight={this.props.viewportHeight}
        />
        <div className="campus-icons">
          {icons.map((icon) => {
            return (
              <div key={icon.name} className={`campus-icons__container campus-icons__container--${icon.name}`}>
                <div
                  ref={icon.name}
                  className="campus-icons__item"
                  dangerouslySetInnerHTML={{ __html: icon.svg }}
                />
              </div>
            )
          })}
        </div>
        <div className="web-mobile-iphone"><img src={phone} /></div>
      </section>
    )
  }
}

export default WebMobile;
