import React, { Component } from 'react';
import ReactDom, { findDOMNode } from 'react-dom';
import helpers from "../../../../../../../shared/util/helpers";

class Patterns extends Component {
  constructor(props) {
    super(props);

    this.onScroll = this.onScroll.bind(this);
    this.onResize = this.onResize.bind(this);
    this.update   = this.update.bind(this);
  }
  componentDidMount() {
    this.ticking       = false;
    this.element       = findDOMNode(this.refs.patterns);
    this.height        = this.element.clientHeight;
    this.dimensions    = {};
    this.patternsNodes = document.querySelectorAll(".patterns__item");
    this.patternsArray = [...this.patternsNodes];
    this.context1 = findDOMNode(this.refs.context1);
    this.context2 = findDOMNode(this.refs.context2);

    window.addEventListener("scroll", this.onScroll, false);
    window.addEventListener("resize", this.onResize, false);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll, false);
    window.removeEventListener("resize", this.onResize, false);
  }
  onScroll() {
    this.dimensions = this.element.getBoundingClientRect();
    this.context1Dimensions = this.context1.getBoundingClientRect();
    this.context2Dimensions = this.context2.getBoundingClientRect();
    if (!this.ticking) {
      window.requestAnimFrame(this.update);
      this.ticking = true;
    }
  }
  onResize() {
    this.dimensions = this.element.getBoundingClientRect();
    this.context1Dimensions = this.context1.getBoundingClientRect();
    this.context2Dimensions = this.context2.getBoundingClientRect();
    this.height     = this.element.clientHeight;
    if (!this.ticking) {
      window.requestAnimFrame(this.update);
      this.ticking = true;
    }
  }
  setActiveClass(context, element, viewportHeight) {
    (context >= viewportHeight * .1) ?
      element.classList.add("fadeInUp--active") :
      element.classList.remove("fadeInUp--active");
  }
  update() {
    let { viewportHeight, windowWidth } = this.props,
        { transformThreeD, position } = helpers,
        patternsTop    = this.dimensions.top,
        patternsBottom = this.dimensions.bottom,
        patternsHeight = this.height,
        context        = (patternsTop - viewportHeight) * -1,
        relativeY      = (context / (viewportHeight * 2)),
        values         = [];

    (windowWidth <= 768) ? values = [50, 100, 75] : values = [100, 200, 150];
    (context >= viewportHeight / 2.5) ? this.element.classList.add("active") : this.element.classList.remove("active");

    if (context >= 0 && patternsBottom >= 0) {
      transformThreeD(this.patternsArray[0], 0, "%", position(0, values[0], relativeY,  0), "px", 0, "px");
      transformThreeD(this.patternsArray[1], 0, "%", position(0, values[1], relativeY,  0), "px", 0, "px");
      transformThreeD(this.patternsArray[2], 0, "%", position(0, values[2], relativeY,  0), "px", 0, "px");
    }

    let context1Top = (this.context1Dimensions.top - viewportHeight) * -1,
        context2Top = (this.context2Dimensions.top - viewportHeight) * -1;

    this.setActiveClass(context1Top, this.context1, viewportHeight);
    this.setActiveClass(context2Top, this.context2, viewportHeight);

    this.ticking = false;
  }
  render() {
    let { patterns } = this.props;
    return (
      <div className="patterns" ref="patterns">
        <div className="patterns-container">
          <div ref="context1" className="fadeInUp patterns-container__item">
            <h1>Colors</h1>
            <div className="patterns-colors">
              <div className="patterns-colors__item patterns-colors__item--red-light"    />
              <div className="patterns-colors__item patterns-colors__item--red-medium"   />
              <div className="patterns-colors__item patterns-colors__item--red-dark"     />
              <div className="patterns-colors__item patterns-colors__item--white-light"  />
              <div className="patterns-colors__item patterns-colors__item--white-medium" />
              <div className="patterns-colors__item patterns-colors__item--white-dark"   />
              <div className="patterns-colors__item patterns-colors__item--gray-light"   />
              <div className="patterns-colors__item patterns-colors__item--gray-medium"  />
              <div className="patterns-colors__item patterns-colors__item--gray-dark"    />
              <div className="patterns-colors__item patterns-colors__item--black-light"  />
              <div className="patterns-colors__item patterns-colors__item--black-medium" />
              <div className="patterns-colors__item patterns-colors__item--black-dark"   />
            </div>
          </div>
          <div ref="context2" className="fadeInUp patterns-container__item">
            <h1>Lato Light</h1>
            <div className="patterns-type">A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
            <br/>0 1 2 3 4 5 6 7 8 9</div>
          </div>
        </div>
        <img className="patterns__item" src={patterns.peppers} />
        <img className="patterns__item" src={patterns.pepperonis} />
        <img className="patterns__item" src={patterns.sprinkles} />
      </div>
    )
  }
}

export default Patterns;
