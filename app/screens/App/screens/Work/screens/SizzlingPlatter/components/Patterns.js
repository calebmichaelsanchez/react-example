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
    this.ticking = false;
    this.element = findDOMNode(this.refs.patterns);
    this.height = this.element.clientHeight;
    this.dimensions = {};
    this.patternsNodes = document.querySelectorAll(".patterns__item"); // html collection
    this.patternsArray = [...this.patternsNodes]; // assures we are working with an array

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
        patternsTop    = this.dimensions.top,
        patternsBottom = this.dimensions.bottom,
        patternsHeight = this.height,
        context    = (patternsTop - viewportHeight) * -1, // handling for when top scrolls up from the bottom (at hits bottom of screen)
        relativeY  = (context / (patternsHeight * 2)), // accounts for the element scrolling above top fold 
        values     = [];

    (windowWidth <= 768) ? values = [ [100], [0, -100] ] : values = [ [100], [0, -75] ];

    (context >= viewportHeight / 2.5) ? this.element.classList.add("active") : this.element.classList.remove("active");

    if (context >= 0 && patternsBottom >= 0) {
      // transformThreeD(element, x, xUnit, y, yUnit, z, zUnit)
      transformThreeD(this.patternsArray[0], values[1][0], "%", position(values[0][0], values[1][1], relativeY,  0), "px", 0, "px");
      transformThreeD(this.patternsArray[1], values[1][0], "%", position(values[0][0], values[1][1], relativeY,  0), "px", 0, "px");
      transformThreeD(this.patternsArray[2], values[1][0], "%", position(values[0][0], values[1][1], relativeY,  0), "px", 0, "px");
    }
    this.ticking = false;
  }
  render() {
    let { patterns } = this.props;
    return (
      <div className="patterns" ref="patterns">
        <div className="patterns-container">
          <h1>COLORS</h1>
          <img className="patterns-container__item" src={patterns.swatches} />
          <h1>LATO LIGHT</h1>
          <p>A B C D E F G H I J K L M N O <br/>
          P Q R S T U V W X Y Z <br/>
          0 1 2 3 4 5 6 7 8 9</p>
        </div>
        <img className="patterns__item" src={patterns.peppers} />
        <img className="patterns__item" src={patterns.pepperonis} />
        <img className="patterns__item" src={patterns.sprinkles} />
      </div>
    )
  }
}

export default Patterns;
