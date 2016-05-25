import React, { Component } from 'react';
import ReactDom, { findDOMNode } from 'react-dom';

class Ingredients extends Component {
  constructor(props) {
    super(props);
    this.onScroll = this.onScroll.bind(this);
    this.onResize = this.onResize.bind(this);
    this.update   = this.update.bind(this);
  }
  componentDidMount() {
    this.ticking = false;
    this.element = findDOMNode(this.refs.element);
    this.dimensions = {};

    window.addEventListener("scroll", this.onScroll, false);
    window.addEventListener("resize", this.onResize, false);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll, false);
    window.removeEventListener("resize", this.onResize, false);
  }
  onScroll() {
    this.dimensions = this.element.getBoundingClientRect();
    if (!this.ticking) {
      window.requestAnimFrame(this.update);
      this.ticking = true;
    }
  }
  onResize() {
    this.dimensions = this.element.getBoundingClientRect();
    if (!this.ticking) {
      window.requestAnimFrame(this.update);
      this.ticking = true;
    }
  }
  update() {
    let { viewportHeight } = this.props,
        top = this.dimensions.top,
        context = (top - viewportHeight) * -1;

    if (context >= viewportHeight * .1) {
      this.element.classList.add("fadeInUp--active");
    } else {
      this.element.classList.remove("fadeInUp--active");
    }
    this.ticking = false;
  }
  render() {
    return (
      <div className="ingredients">
        <div className="ingredients-container">
          <div ref="element" className="fadeInUp ingredients-container__item ingredients-copy">
            <h1>A Dash of Photoraphy</h1>
            <p>The Underbelly team loves to incorporate custom photography whenever possible. We knew from day one we’d want to embark on a photoshoot for this project. We wanted crisp, clean photos taken at actual SPLAT locations around the valley, not boring stock photos. Not only did get great shots on location, but we held an in-house photoshoot to get shots of ingredients like pepperoni, mushrooms, and even sprinkles! Pulling together high quality, custom photos allowed the best assets possible for our client and the site…nevermind the fact that it left us craving pizza and donuts every time we worked on the site.</p>
          </div>
        </div>
        <div className="ingredients-hero"></div>
      </div>
    )
  }
}

export default Ingredients;
