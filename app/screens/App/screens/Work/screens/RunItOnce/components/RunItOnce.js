import React, { Component } from 'react';
import ReactDom, { findDOMNode } from 'react-dom';
import classNames from 'classnames';
import DocumentTitle from 'react-document-title';
import SeeMore from "../../../shared/SeeMore";
import helpers from "../../../../../../../shared/util/helpers";

class RunItOnce extends Component {
	constructor(props) {
		super(props);
    this.onScroll       = this.onScroll.bind(this);
    this.updateElements = this.updateElements.bind(this);
    this.position       = this.position.bind(this);
    this.limit          = this.limit.bind(this);
    this.isInViewport   = this.isInViewport.bind(this);
    this.updateCardboxElements = this.updateCardboxElements.bind(this);
    this.updateDeckElements = this.updateDeckElements.bind(this);
    this.updateCardElements = this.updateCardElements.bind(this);
	}
	componentDidMount() {
		ga('send', 'pageview', '/making-it-awesome-with/run-it-once');
		this.props.setNavTheme(this.props.theme);
    this.throttledScroll = helpers.throttle(this.onScroll, 30);
		window.addEventListener("scroll", this.throttledScroll, false);
	}
  componentWillUnmount() {
    // removes event listener to keep onScroll from running on other pages
    window.removeEventListener("scroll", this.throttledScroll, false);
  }
  // changed the name of the function the be more in line with what we have done historically
  onScroll() {
    window.requestAnimationFrame(this.updateCardboxElements);
    window.requestAnimationFrame(this.updateDeckElements);
    window.requestAnimationFrame(this.updateCardElements);
  }
  updateCardboxElements() {
    let { pageYOffset, viewportHeight, windowWidth }  = this.props,
        cardboxContainer = findDOMNode(this.refs.rioHero),
        cardboxTop       = cardboxContainer.getBoundingClientRect().top,
        cardboxBottom    = cardboxContainer.getBoundingClientRect().bottom,
        cardboxHeight    = cardboxContainer.clientHeight,
        cardboxNodes     = document.querySelectorAll(".cardbox__item"),
        cardboxArray     = [...cardboxNodes],
        context          = (pageYOffset - viewportHeight) * -1,
        relativeY        = (pageYOffset / cardboxHeight) * 4,
        values           = [];

    (windowWidth <= 640) ? values = [ 80/2, -120/2, -40/2, 40/2.25, 160/1.5] : values = [ 80, -120, -40, 40, 160 ];
    if (context >= 0 && cardboxBottom >= 0) {
      cardboxArray[0].style.transform = `translate3d( -50%, ${this.position(0, values[0], relativeY, 0)}px, 0`;
      cardboxArray[1].style.transform = `translate3d( -50%, ${this.position(0, values[1], relativeY, 0)}px, 0`;
      cardboxArray[2].style.transform = `translate3d( -50%, ${this.position(0, values[2], relativeY, 0)}px, 0`;
      cardboxArray[3].style.transform = `translate3d( -50%, ${this.position(0, values[3], relativeY, 0)}px, 0`;
      cardboxArray[4].style.transform = `translate3d( -50%, ${this.position(0, values[4], relativeY, 0)}px, 0`;
    }
  }
  updateDeckElements() {
    let { viewportHeight, windowWidth }  = this.props,
        deckContainer = findDOMNode(this.refs.deck),
        deckTop       = deckContainer.getBoundingClientRect().top,
        deckBottom    = deckContainer.getBoundingClientRect().bottom,
        deckHeight    = deckContainer.clientHeight,
        deckNodes     = document.querySelectorAll(".deck-cards__item"),
        deckArray     = [...deckNodes],
        context       = (deckTop - viewportHeight) * -1,
        relativeY     = (context / (deckHeight * 2)),
        values        = [];

    (windowWidth <= 768) ? values = [ [26], [-50, -145] ] : values = [ [100], [0, -220] ];
    if (context >= 0 && deckBottom >= 0) {
      deckArray[0].style.transform = `translate3d( ${values[1][0]}%, ${this.position(values[0][0], values[1][1], relativeY, 0)}px, 0`;
      deckArray[1].style.transform = `translate3d( ${values[1][0]}%, ${this.position(values[0][0], values[1][1], (relativeY * .8),  0)}px, 0`;
      deckArray[2].style.transform = `translate3d( ${values[1][0]}%, ${this.position(values[0][0], values[1][1], (relativeY * .6),  0)}px, 0`;
      deckArray[3].style.transform = `translate3d( ${values[1][0]}%, ${this.position(values[0][0], values[1][1], (relativeY * .4),  0)}px, 0`;
      deckArray[4].style.transform = `translate3d( ${values[1][0]}%, ${this.position(values[0][0], values[1][1], (relativeY * .2),  0)}px, 0`;
      deckArray[5].style.transform = `translate3d( ${values[1][0]}%, ${this.position(values[0][0], values[1][1], (relativeY * .05), 0)}px, 0`;
    }
  }
  updateCardElements() {
    let { viewportHeight, windowWidth }  = this.props,
        cardsContainer = findDOMNode(this.refs.cards),
        cardsTop       = cardsContainer.getBoundingClientRect().top,
        cardsBottom    = cardsContainer.getBoundingClientRect().bottom,
        cardsHeight    = cardsContainer.clientHeight,
        cardsNodes     = document.querySelectorAll(".cards-cards__item"),
        cardsArray     = [...cardsNodes],
        context        = (cardsTop - viewportHeight) * -1,
        relativeY      = (context / (cardsHeight * 2)),
        values         = [];

    //(windowWidth <= 768) ? values = [ [0], [-50, -160] ] : values = [ [100], [0, -220] ];
    if (context >= 0 && cardsBottom >= 0) {
      cardsArray[0].style.transform = `rotate( ${this.position(0, -15, relativeY, 0)}deg)`;
      cardsArray[1].style.transform = `rotate( ${this.position(0,  15, relativeY, 0)}deg)`;
      cardsArray[2].style.transform = `rotate( ${this.position(0, -15, relativeY, 0)}deg)`;
    }
  }
  updateElements() {
    let { pageYOffset, viewportHeight }  = this.props,
        deckTop          = findDOMNode(this.refs.deck).getBoundingClientRect().top,
        rotateCardsTop   = findDOMNode(this.refs.rotateCards).getBoundingClientRect().top,
        finalTop         = findDOMNode(this.refs.final).getBoundingClientRect().top,
        inc              = pageYOffset / 120;

    if (pageYOffset >= deckTop) {
      this.refs.deckCard01.style.transform = "translateY(-" + inc * 12 + "px)";
      this.refs.deckCard02.style.transform = "translateY(-" + inc * 10 + "px)";
      this.refs.deckCard03.style.transform = "translateY(-" + inc * 8 + "px)";
      this.refs.deckCard04.style.transform = "translateY(-" + inc * 6 + "px)";
      this.refs.deckCard05.style.transform = "translateY(-" + inc * 4 + "px)";
    }
    if (pageYOffset >= rotateCardsTop + 100) {
      this.refs.rCard01.style.transform = "rotate(-" + inc * 0.45 + "deg)"
      this.refs.rCard02.style.transform = "rotate(" + inc * 0.45 + "deg)"
      this.refs.rCard03.style.transform = "rotate(-" + inc * 0.45 + "deg)"
    }
    if (finalTop < 200) {
      this.refs.cardBox2.className = '';
    }
  }
  position(base, range, relativeY, offset) {
    let returnVal = base + this.limit(0, 1, relativeY - offset) * range;
    return returnVal;
  }
  limit(min, max, value) {
    return Math.max(min, Math.min(max, value));
  }
  isInViewport(elem) {
    let distance = elem.getBoundingClientRect(), { viewportHeight } = this.props;
    return (distance.bottom > 0 && distance.top < viewportHeight);
  }
	render() {
		let img = {
			hero: {
        one   : require("../../../../../../../images/work/run-it-once/hero/logo.png"),
        two   : require("../../../../../../../images/work/run-it-once/hero/box-front.png"),
        three : require("../../../../../../../images/work/run-it-once/hero/card-01.png"),
        four  : require("../../../../../../../images/work/run-it-once/hero/card-02.png"),
        five  : require("../../../../../../../images/work/run-it-once/hero/card-03.png"),
        six   : require("../../../../../../../images/work/run-it-once/hero/lid-closed.png"),
        seven : require("../../../../../../../images/work/run-it-once/hero/lid-open.png"),
        eight : require("../../../../../../../images/work/run-it-once/hero/two-cards.png")
			},
      cardbox: {
        lid: require("../../../../../../../images/work/run-it-once/hero/lid-lip.png"),
        front: require("../../../../../../../images/work/run-it-once/hero/box-front-01.png"),
        card: require("../../../../../../../images/work/run-it-once/hero/card.png")
      },
			deck: {
        one   : require("../../../../../../../images/work/run-it-once/deck/01.png"),
        two   : require("../../../../../../../images/work/run-it-once/deck/02.png"),
        three : require("../../../../../../../images/work/run-it-once/deck/03.png"),
        four  : require("../../../../../../../images/work/run-it-once/deck/04.png"),
        five  : require("../../../../../../../images/work/run-it-once/deck/05.png"),
        six   : require("../../../../../../../images/work/run-it-once/deck/06.png")
			},
			gallery: {
        one   : require("../../../../../../../images/work/run-it-once/gallery/1.png"),
        two   : require("../../../../../../../images/work/run-it-once/gallery/2.png"),
        three : require("../../../../../../../images/work/run-it-once/gallery/3.png")
			},
			cards: {
        one   : require("../../../../../../../images/work/run-it-once/cards/1.png"),
        two   : require("../../../../../../../images/work/run-it-once/cards/2.png"),
        three : require("../../../../../../../images/work/run-it-once/cards/3.png")
			},
			gallery2: {
        one   : require("../../../../../../../images/work/run-it-once/gallery2/1.png"),
        two   : require("../../../../../../../images/work/run-it-once/gallery2/2.png"),
        three : require("../../../../../../../images/work/run-it-once/gallery2/3.png")
			},
			lifestyle : require("../../../../../../../images/work/fluid/lifestyle/01.jpg"),
			seeMore: {
        one   : require("../../../../../../../images/work/see-more/hive.jpg"),
        two   : require("../../../../../../../images/work/see-more/just-family.jpg"),
        three : require("../../../../../../../images/work/see-more/nsac.jpg"),
        four  : require("../../../../../../../images/work/see-more/rent-tree.jpg")
			}
		}
		return (
			<DocumentTitle title="Run It Once | Underbelly Creative">
				<div className="case-study run-it-once">
					<div ref="rioHero" className="hero--rio">
						<img src={img.hero.one} className="rio-logo" alt="Run It Once Logo"/>
						<div id="cardBox" className="cardbox" ref="cardbox">
              <img src={img.cardbox.lid}   className="cardbox__item cardbox__item--lid"   />
              <img src={img.cardbox.card}  className="cardbox__item cardbox__item--card"  />
              <img src={img.cardbox.card}  className="cardbox__item cardbox__item--card"  />
              <img src={img.cardbox.card}  className="cardbox__item cardbox__item--card"  />
              <img src={img.cardbox.front} className="cardbox__item cardbox__item--front" />
						</div>
					</div>
					<section className="two-cards"></section>
					<div className="deck" ref="deck">
						<div className="deck-container">
							<div className="deck-container__item deck-copy">
								<div className="button-wrap">
									<a href="#" className="button">Illustration</a> <a href="#" className="button">Photography</a>
								</div>
								<p>Run It Once, created by legendary poker player Phil Galfond, is a place for poker enthusiasts to gather and contribute professional-level strategy with others in the poker community. Besides the wealth of knowledge available at Run It Once, RIO’s brand is one classy act. With a clean, professional, and luxurious logo its no wonder their site is one of the best looking (and functioning) poker communities out there.</p>
								<p>At Underbelly, we’re suckers for playing card designs. That’s one of the many reasons we were stoked to partner with Phil and the Run It Once crew on designing the first official Run It Once card deck.</p>
							</div>
							<div className="deck-container__item deck-cards">
                <img src={img.deck.one}   className="deck-cards__item" />
                <img src={img.deck.two}   className="deck-cards__item" />
                <img src={img.deck.three} className="deck-cards__item" />
                <img src={img.deck.four}  className="deck-cards__item" />
                <img src={img.deck.five}  className="deck-cards__item" />
                <img src={img.deck.six}   className="deck-cards__item" />
							</div>
						</div>
					</div>
					<section className="case-study-gallery">
						<div className="grid-1-2">
							<img width="100%" className="galleryImg one" src={img.gallery.one} alt=""/>
						</div>
						<div className="grid-1-2">
							<img width="100%" className="galleryImg two" src={img.gallery.two} alt=""/>
							<img width="100%" className="galleryImg three" src={img.gallery.three} alt=""/>
						</div>
					</section>
					<div className="cards" ref="cards">
						<div className="cards-container">
							<div className="cards-container__item cards-copy">
								<p>Matching the palatial look and feel of Run It Once’s brand was no small feat. We took multiple approaches before finally landing on a style that was sleek, geometric, and modern. Each suit was designed with a unique personality to give the deck depth and variety while still remaining true to RIO’s brand. Diamonds crafted to be rugged and adventurous, spades strong and ruthless, clubs secretive and seductive, and hearts trustworthy and approachable.</p>
								<p>The finished product is a world-class, unique deck of cards worthy of the most talented professional poker hands. However, no need to worry; you don’t have to have a bracelet under your belt to enjoy these cards. Anyone can purchase these beauties directly from RIO’s site- even if you’re one of those casual, low-stakes, hold-em folks. If you’re anything like us, you can’t pass up a hot deck of cards.</p>
							</div>
							<div className="card-container__item cards-cards">
                <img src={img.cards.one}   className="cards-cards__item" />
                <img src={img.cards.two}   className="cards-cards__item" />
                <img src={img.cards.three} className="cards-cards__item" />
							</div>
						</div>
					</div>
					<section className="case-study-gallery2">
						<div className="grid-1-3">
							<img width="100%" className="gallery2Img one" src={img.gallery2.one} alt=""/>
						</div>
						<div className="grid-1-3">
							<img width="100%" className="gallery2Img two" src={img.gallery2.two} alt=""/>
						</div>
						<div className="grid-1-3">
							<img width="100%" className="gallery2Img three" src={img.gallery2.three} alt=""/>
						</div>
					</section>
					<section className="case-study-final" ref="final">
						<a href="#" className="button buy-button">buy em now</a>
            <div id="cardBox" ref="cardBox2" className="animate">
              <img src={img.hero.seven} className="backLid"/>
              <img src={img.hero.six} className="frontLid"/>
              <img src={img.hero.three} className="card01"/>
              <img src={img.hero.four} className="card02"/>
              <img src={img.hero.five} className="card03"/>
              <img src={img.hero.two} className="front"/>
            </div>
					</section>
					<SeeMore items={[
						{ url: "hive", title: "Hive", img: img.seeMore.one },
						{ url: "just-family", title: "Just Family", img: img.seeMore.two },
						{ url: "nsac", title: "North Seathlle Alliance Church", img: img.seeMore.three },
						{ url: "rent-tree", title: "RentTree", img: img.seeMore.four }
					]}/>
				</div>
			</DocumentTitle>
		);
	}
}

RunItOnce.propTypes = {
	name: React.PropTypes.string,
	theme: React.PropTypes.string,
	setNavTheme: React.PropTypes.func
}

RunItOnce.defaultProps = {
	name: 'run-it-once',
	theme: 'dark'
}

export default RunItOnce;
