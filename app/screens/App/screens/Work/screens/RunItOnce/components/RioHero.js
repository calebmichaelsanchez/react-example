import React, { Component } from 'react';
import ReactDom, { findDOMNode } from 'react-dom';
import classNames from 'classnames';
import helpers from "../../../../../../../shared/util/helpers";

class RioHero extends Component {
  constructor(props) {
    super(props);

    this.onScroll = this.onScroll.bind(this);
    this.onResize = this.onResize.bind(this);
    this.update   = this.update.bind(this);
    this.onLoad   = this.onLoad.bind(this);

    this.state = {
      loaded: false
    }
  }
  componentDidMount() {
    this.lastKnownScroll = 0;
    this.ticking = false;
    this.element = findDOMNode(this.refs.rioHero);
    this.height = this.element.clientHeight;
    this.dimensions = {};

    window.addEventListener("scroll", this.onScroll, false);
    window.addEventListener("resize", this.onResize, false);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll, false);
    window.removeEventListener("resize", this.onResize, false);
  }
  onScroll() {
    this.lastKnownScroll = window.pageYOffset;
    this.dimensions = this.element.getBoundingClientRect();
    if (!this.ticking) {
      window.requestAnimFrame(this.update);
      this.ticking = true;
    }
  }
  onResize() {
    this.lastKnownScroll = window.pageYOffset;
    this.dimensions      = this.element.getBoundingClientRect();
    this.height          = this.element.clientHeight;
    if (!this.ticking) {
      window.requestAnimFrame(this.update);
      this.ticking = true;
    }
  }
  onLoad() {
    this.setState({ loaded: true });
  }
  update() {
    let { viewportHeight, windowWidth }  = this.props,
        { transformThreeD, position }   = helpers,
        currentScrollPosition = this.lastKnownScroll,
        cardboxBottom         = this.dimensions.bottom,
        cardboxHeight         = this.height,
        cardboxNodes          = document.querySelectorAll(".cardbox__item"),
        cardboxArray          = [...cardboxNodes],
        context               = (currentScrollPosition - viewportHeight) * -1,
        relativeY             = (currentScrollPosition / cardboxHeight),
        values                = [],
        movement1             = cardboxHeight * .11,
        movement2             = cardboxHeight * (-.11),
        movement3             = cardboxHeight * (-.05),
        movement4             = cardboxHeight * .01,
        movement5             = cardboxHeight * .165;

    (windowWidth <= 640) ? values = [ 80/2, -120/2, -40/2, 40/2.25, 160/1.5] : values = [ 80, -80, -30, 20, 120 ];

    if (context >= 0 && cardboxBottom >= 0) {
      transformThreeD(cardboxArray[0], -50, "%", position(0, movement1, relativeY,        0), "px", 0, "px");
      transformThreeD(cardboxArray[1], -50, "%", position(0, movement1, relativeY,        0), "px", 0, "px");
      transformThreeD(cardboxArray[2], -50, "%", position(0, movement2, relativeY * 2,    0), "px", 0, "px");
      transformThreeD(cardboxArray[3], -50, "%", position(0, movement3, relativeY * 2,    0), "px", 0, "px");
      transformThreeD(cardboxArray[4], -50, "%", position(0, movement4, relativeY * 2,    0), "px", 0, "px");
      transformThreeD(cardboxArray[5], -50, "%", position(0, movement5, relativeY * 1.35, 0), "px", 0, "px");
    }
    this.ticking = false ;
  }
  render() {
    let { logo, cardbox } = this.props;
    let loaded = classNames({
      'loaded': this.state.loaded
    });
    return (
      <div ref="rioHero" className="hero--rio">
        <img src={logo} className="rio-logo" alt="Run It Once Logo" />
        <div id="cardBox" className={`cardbox cardbox--intro ${loaded}`}>
          <img src={cardbox.lid}     className="cardbox__item cardbox__item--lid" />
          <img src={cardbox.lidBack} className="cardbox__item cardbox__item--lidback" />
          <img src={cardbox.card}    className="cardbox__item cardbox__item--card" />
          <img src={cardbox.card}    className="cardbox__item cardbox__item--card" />
          <img src={cardbox.card}    className="cardbox__item cardbox__item--card" />
          <img onLoad={this.onLoad} src={cardbox.front}   className="cardbox__item cardbox__item--front" />
        </div>
      </div>
    )
  }
}

export default RioHero;
