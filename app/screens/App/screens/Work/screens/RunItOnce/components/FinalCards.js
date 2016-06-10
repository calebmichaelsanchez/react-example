import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import helpers from '../../../../../../../shared/util/helpers';

class FinalCards extends Component {
  constructor(props) {
    super(props);

    this.onScroll = this.onScroll.bind(this);
    this.onResize = this.onResize.bind(this);
    this.update   = this.update.bind(this);
  }
  componentDidMount() {
    this.ticking      = false;
    this.element      = findDOMNode(this.refs.ending);
    this.buyButton    = findDOMNode(this.refs.buy);
    this.height       = this.element.clientHeight;
    this.dimensions   = {};
    this.cardboxNodes = document.querySelectorAll('.cardbox-ending__item');
    this.cardboxArray = [...this.cardboxNodes];

    window.addEventListener('scroll', this.onScroll, false);
    window.addEventListener('resize', this.onResize, false);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll, false);
    window.removeEventListener('resize', this.onResize, false);
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
    let { viewportHeight, windowWidth } = this.props;
    let { transformThreeD, position } = helpers;
    let cardboxTop          = this.dimensions.top;
    let cardboxHeight       = this.height;
    let context             = (cardboxTop - viewportHeight * 0.6) * -1;
    let contextView         = (cardboxTop - viewportHeight) * -1;
    let contextPlus         = context - cardboxHeight * 0.64;
    let relativeY           = context / cardboxHeight;
    let relativeYPlus       = contextPlus / cardboxHeight;
    let showButtonValue     = cardboxHeight * 0.2;
    let movement1           = cardboxHeight * 0.08;
    let movement2           = cardboxHeight * -0.25;
    let movement3           = cardboxHeight * -0.15;
    let movement4           = cardboxHeight * 0.06;
    let movement5           = cardboxHeight * 0.165;
    let lidSpeed            = windowWidth >= 1440 ? 3 : 4;

    if (contextView >= 0) {
      transformThreeD(this.cardboxArray[0], -50, '%', position(movement1 * -1, movement1,      relativeYPlus * lidSpeed, 0), 'px', 0, 'px');
      transformThreeD(this.cardboxArray[1], -50, '%', position(movement1 * -1, movement1,      relativeYPlus * lidSpeed, 0), 'px', 0, 'px');
      transformThreeD(this.cardboxArray[2], -50, '%', position(movement2,      movement2 * -1, relativeY * 1.5, 0), 'px', 0, 'px');
      transformThreeD(this.cardboxArray[3], -50, '%', position(movement3,      movement3 * -1, relativeY * 1.5, 0), 'px', 0, 'px');
      transformThreeD(this.cardboxArray[4], -50, '%', position(movement4 * -1, movement4,      relativeY * 1.5, 0), 'px', 0, 'px');
      transformThreeD(this.cardboxArray[5], -50, '%', position(movement5,      movement5 * -1, relativeY * 1.5, 0), 'px', 0, 'px');
    }

    context >= showButtonValue ? this.buyButton.classList.add('active') : this.buyButton.classList.remove('active');

    this.ticking = false;
  }
  render() {
    let { cardbox } = this.props;
    return (
      <div ref="ending" className="hero--rio hero--rio--final">
        <div className="cardbox-container">
          <a ref="buy" href="http://store.runitonce.com/products/1st-edition-playing-cards" target="_blank" className="button buy-button">buy 'em now</a>
          <div id="cardBox" className="cardbox" ref="cardbox">
            <img src={cardbox.lid}     className="cardbox-ending__item cardbox-ending__item--lid"   />
            <img src={cardbox.lidBack} className="cardbox-ending__item cardbox-ending__item--lidback" />
            <img src={cardbox.card}    className="cardbox-ending__item cardbox-ending__item--card"  />
            <img src={cardbox.card}    className="cardbox-ending__item cardbox-ending__item--card"  />
            <img src={cardbox.card}    className="cardbox-ending__item cardbox-ending__item--card"  />
            <img src={cardbox.front}   className="cardbox-ending__item cardbox-ending__item--front" />
          </div>
        </div>
      </div>
    );
  }
}

FinalCards.propTypes = {
  'cardbox': React.PropTypes.object.isRequired,
  'viewportHeight': React.PropTypes.number.isRequired,
  'windowWidth': React.PropTypes.number.isRequired
};

export default FinalCards;
