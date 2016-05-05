import React, { Component } from 'react';
import ReactDom, { findDOMNode } from 'react-dom';
import TagsContainer from "../../../shared/TagsContainer";
import helpers from "../../../../../../../shared/util/helpers";

class Deck extends Component {
  constructor(props) {
    super(props);

    this.onScroll = this.onScroll.bind(this);
    this.onResize = this.onResize.bind(this);
    this.update   = this.update.bind(this);
  }
  componentDidMount() {
    this.ticking = false;
    this.element = findDOMNode(this.refs.deck);
    this.height = this.element.clientHeight;
    this.dimensions = {};
    this.deckNodes = document.querySelectorAll(".deck-cards__item");
    this.deckArray = [...this.deckNodes];

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
    let { viewportHeight, windowWidth }  = this.props,
        { transformThreeD, position } = helpers,
        deckTop    = this.dimensions.top,
        deckBottom = this.dimensions.bottom,
        deckHeight = this.height,
        context    = (deckTop - viewportHeight) * -1,
        relativeY  = (context / (deckHeight * 2)),
        values     = [];

    (windowWidth <= 768) ? values = [ [25], [-50, -145] ] : values = [ [100], [0, -320] ];

    (context >= viewportHeight / 2.5) ? this.element.classList.add("active") : this.element.classList.remove("active");

    if (context >= 0 && deckBottom >= 0) {
      transformThreeD(this.deckArray[0], values[1][0], "%", position(values[0][0], values[1][1], relativeY,       0), "px", 0, "px");
      transformThreeD(this.deckArray[1], values[1][0], "%", position(values[0][0], values[1][1], relativeY * .8,  0), "px", 0, "px");
      transformThreeD(this.deckArray[2], values[1][0], "%", position(values[0][0], values[1][1], relativeY * .6,  0), "px", 0, "px");
      transformThreeD(this.deckArray[3], values[1][0], "%", position(values[0][0], values[1][1], relativeY * .4,  0), "px", 0, "px");
      transformThreeD(this.deckArray[4], values[1][0], "%", position(values[0][0], values[1][1], relativeY * .2,  0), "px", 0, "px");
      transformThreeD(this.deckArray[5], values[1][0], "%", position(values[0][0], values[1][1], relativeY * .1,  0), "px", 0, "px");
    }
    this.ticking = false;
  }
  render() {
    let { deck } = this.props;
    return (
      <div className="deck" ref="deck">
        <div className="deck-container">
          <div className="deck-container__item deck-copy">
            <h1>Backstory</h1>
            <TagsContainer context="run-it-once" tags={[ "Illustration", "Photography" ]} />
            <p>Run It Once, created by legendary poker player Phil Galfond, is a place for poker enthusiasts to gather and contribute professional-level strategy with others in the poker community. Besides the wealth of knowledge available at Run It Once, RIO’s brand is one classy act. With a clean, professional, and luxurious logo its no wonder their site is one of the best looking (and functioning) poker communities out there.</p>
            <p>At Underbelly, we’re suckers for playing card designs. That’s one of the many reasons we were stoked to partner with Phil and the Run It Once crew on designing the first official Run It Once card deck.</p>
          </div>
          <div className="deck-container__item deck-cards">
            <img src={deck.one}   className="deck-cards__item" />
            <img src={deck.two}   className="deck-cards__item" />
            <img src={deck.three} className="deck-cards__item" />
            <img src={deck.four}  className="deck-cards__item" />
            <img src={deck.five}  className="deck-cards__item" />
            <img src={deck.six}   className="deck-cards__item" />
          </div>
        </div>
      </div>
    )
  }
}

export default Deck;
