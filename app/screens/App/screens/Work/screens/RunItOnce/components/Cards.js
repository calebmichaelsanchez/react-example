import React, { Component } from 'react';
import ReactDom, { findDOMNode } from 'react-dom';
import helpers from "../../../../../../../shared/util/helpers";

class Cards extends Component {
  constructor(props) {
    super(props);

    this.onScroll = this.onScroll.bind(this);
    this.onResize = this.onResize.bind(this);
    this.update   = this.update.bind(this);
  }
  componentDidMount() {
    this.ticking = false;
    this.element = findDOMNode(this.refs.cards);
    this.height = this.element.clientHeight;
    this.dimensions = {};
    this.cardsNodes = document.querySelectorAll(".cards-cards__item");
    this.cardsArray = [...this.cardsNodes];

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
    this.dimensions      = this.element.getBoundingClientRect();
    this.height          = this.element.clientHeight;
    if (!this.ticking) {
      window.requestAnimFrame(this.update);
      this.ticking = true;
    }
  }
  update() {
    let { viewportHeight, windowWidth } = this.props,
        { transformRotate, position } = helpers,
        cardsTop    = this.dimensions.top,
        cardsBottom = this.dimensions.bottom,
        cardsHeight = this.height,
        context     = (cardsTop - viewportHeight) * -1,
        relativeY   = (context / (cardsHeight * 2));

    (context >= viewportHeight / 2.5) ? this.element.classList.add("active") : this.element.classList.remove("active");

    if (context >= 0 && cardsBottom >= 0) {
      transformRotate(this.cardsArray[0], position(15,  -15, relativeY, 0));
      transformRotate(this.cardsArray[1], position(-15,  15, relativeY, 0));
      transformRotate(this.cardsArray[2], position(15,  -15, relativeY, 0));
    }
    this.ticking = false;
  }
  render() {
    let { cards } = this.props;
    return (
      <div className="cards" ref="cards">
        <div className="cards-container">
          <div className="cards-container__item cards-copy">
            <p>Matching the palatial look and feel of Run It Once’s brand was no small feat. We took multiple approaches before finally landing on a style that was sleek, geometric, and modern. Each suit was designed with a unique personality to give the deck depth and variety while still remaining true to RIO’s brand. Diamonds crafted to be rugged and adventurous, spades strong and ruthless, clubs secretive and seductive, and hearts trustworthy and approachable.</p>
            <p>The finished product is a world-class, unique deck of cards worthy of the most talented professional poker hands. However, no need to worry; you don’t have to have a bracelet under your belt to enjoy these cards. Anyone can purchase these beauties directly from RIO’s site- even if you’re one of those casual, low-stakes, hold-em folks. If you’re anything like us, you can’t pass up a hot deck of cards.</p>
          </div>
          <div className="card-container__item cards-cards">
            <img src={cards.one}   className="cards-cards__item" />
            <img src={cards.two}   className="cards-cards__item" />
            <img src={cards.three} className="cards-cards__item" />
          </div>
        </div>
      </div>
    )
  }
}

export default Cards;
