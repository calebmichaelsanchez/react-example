import React, { Component } from 'react';
import ReactDom, { findDOMNode } from 'react-dom';
import classNames from 'classnames';
import DocumentTitle from 'react-document-title';
import SeeMore from "../../../shared/SeeMore";
import helpers from "../../../../../../../shared/util/helpers";

class RunItOnce extends Component {
	constructor(props) {
		super(props);
    this.onScroll              = this.onScroll.bind(this);
    this.position              = this.position.bind(this);
    this.limit                 = this.limit.bind(this);
    this.isInViewport          = this.isInViewport.bind(this);
    this.updateCardboxElements = this.updateCardboxElements.bind(this);
    this.updateDeckElements    = this.updateDeckElements.bind(this);
    this.updateCardElements    = this.updateCardElements.bind(this);
    this.updateEndingElements  = this.updateEndingElements.bind(this);
    this.onResize              = this.onResize.bind(this);
	}
	componentDidMount() {
    this.lastKnownScroll       = 0;
    this.tickingOne            = false;
    this.tickingTwo            = false;
    this.tickingThree          = false;
    this.tickingFour           = false;
    this.elementOne            = findDOMNode(this.refs.rioHero);
    this.elementTwo            = findDOMNode(this.refs.deck);
    this.elementThree          = findDOMNode(this.refs.cards);
    this.elementFour           = findDOMNode(this.refs.ending);
    this.elementOneHeight      = this.elementOne.clientHeight;
    this.elementTwoHeight      = this.elementTwo.clientHeight;
    this.elementThreeHeight    = this.elementThree.clientHeight;
    this.elementFourHeight     = this.elementFour.clientHeight;
    this.dimensionsOne         = {};
    this.dimensionsTwo         = {};
    this.dimensionsThree       = {};
    this.dimensionsFour        = {};

		ga('send', 'pageview', '/making-it-awesome-with/run-it-once');

		this.props.setNavTheme(this.props.theme);

		window.addEventListener("scroll", this.onScroll, false);
    window.addEventListener("resize", this.onResize, false);

    window.requestAnimFrame(this.updateCardboxElements);
    window.requestAnimFrame(this.updateDeckElements);
    window.requestAnimFrame(this.updateCardElements);
    window.requestAnimFrame(this.updateEndingElements);
	}
  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll, false);
    window.removeEventListener("resize", this.onResize, false);
  }
  onScroll() {
    this.lastKnownScroll      = window.pageYOffset;
    this.dimensionsOne        = this.elementOne.getBoundingClientRect();
    this.dimensionsTwo        = this.elementTwo.getBoundingClientRect();
    this.dimensionsThree      = this.elementThree.getBoundingClientRect();
    this.dimensionsFour       = this.elementFour.getBoundingClientRect();
    if(!this.tickingOne)   {
      window.requestAnimFrame(this.updateCardboxElements);
      this.tickingOne = true;
    }
    if(!this.tickingTwo)   {
      window.requestAnimFrame(this.updateDeckElements);
      this.tickingTwo = true;
    }
    if(!this.tickingThree) {
      window.requestAnimFrame(this.updateCardElements);
      this.tickingThree = true;
    }
    if(!this.tickingFour)  {
      window.requestAnimFrame(this.updateEndingElements);
      this.tickingFour = true;
    }
  }
  onResize() {
    this.lastKnownScroll       = window.pageYOffset;
    this.dimensionsOne         = this.elementOne.getBoundingClientRect();
    this.dimensionsTwo         = this.elementTwo.getBoundingClientRect();
    this.dimensionsThree       = this.elementThree.getBoundingClientRect();
    this.dimensionsFour        = this.elementFour.getBoundingClientRect();
    this.elementOneHeight      = this.elementOne.clientHeight;
    this.elementTwoHeight      = this.elementTwo.clientHeight;
    this.elementThreeHeight    = this.elementThree.clientHeight;
    this.elementFourHeight     = this.elementFour.clientHeight;
    if(!this.tickingOne)   {
      window.requestAnimFrame(this.updateCardboxElements);
      this.tickingOne = true;
    }
    if(!this.tickingTwo)   {
      window.requestAnimFrame(this.updateDeckElements);
      this.tickingTwo = true;
    }
    if(!this.tickingThree) {
      window.requestAnimFrame(this.updateCardElements);
      this.tickingThree = true;
    }
    if(!this.tickingFour)  {
      window.requestAnimFrame(this.updateEndingElements);
      this.tickingFour = true;
    }
  }
  updateCardboxElements() {
    let { viewportHeight, windowWidth }  = this.props,
        { transformThreeD }   = helpers,
        currentScrollPosition = this.lastKnownScroll,
        cardboxBottom         = this.dimensionsOne.bottom,
        cardboxHeight         = this.elementOneHeight,
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
      transformThreeD(cardboxArray[0], -50, "%",  this.position(0, movement1, relativeY,        0), "px", 0, "px");
      transformThreeD(cardboxArray[1], -50, "%",  this.position(0, movement1, relativeY,        0), "px", 0, "px");
      transformThreeD(cardboxArray[2], -50, "%",  this.position(0, movement2, relativeY * 2,    0), "px", 0, "px");
      transformThreeD(cardboxArray[3], -50, "%",  this.position(0, movement3, relativeY * 2,    0), "px", 0, "px");
      transformThreeD(cardboxArray[4], -50, "%",  this.position(0, movement4, relativeY * 2,    0), "px", 0, "px");
      transformThreeD(cardboxArray[5], -50, "%",  this.position(0, movement5, relativeY * 1.35, 0), "px", 0, "px");
    }
    this.tickingOne = false ;
  }
  updateDeckElements() {
    let { viewportHeight, windowWidth }  = this.props,
        { transformThreeD } = helpers,
        deckTop    = this.dimensionsTwo.top,
        deckBottom = this.dimensionsTwo.bottom,
        deckHeight = this.elementTwoHeight,
        deckNodes  = document.querySelectorAll(".deck-cards__item"),
        deckArray  = [...deckNodes],
        context    = (deckTop - viewportHeight) * -1,
        relativeY  = (context / (deckHeight * 2)),
        values     = [];

    (windowWidth <= 768) ? values = [ [25], [-50, -145] ] : values = [ [100], [0, -320] ];

    (context >= deckHeight / 3) ? this.elementTwo.classList.add("active") : this.elementTwo.classList.remove("active");

    if (context >= 0 && deckBottom >= 0) {
      transformThreeD(deckArray[0], values[1][0], "%", this.position(values[0][0], values[1][1], relativeY,       0), "px", 0, "px");
      transformThreeD(deckArray[1], values[1][0], "%", this.position(values[0][0], values[1][1], relativeY * .8,  0), "px", 0, "px");
      transformThreeD(deckArray[2], values[1][0], "%", this.position(values[0][0], values[1][1], relativeY * .6,  0), "px", 0, "px");
      transformThreeD(deckArray[3], values[1][0], "%", this.position(values[0][0], values[1][1], relativeY * .4,  0), "px", 0, "px");
      transformThreeD(deckArray[4], values[1][0], "%", this.position(values[0][0], values[1][1], relativeY * .2,  0), "px", 0, "px");
      transformThreeD(deckArray[5], values[1][0], "%", this.position(values[0][0], values[1][1], relativeY * .1,  0), "px", 0, "px");
    }
    this.tickingTwo = false;
  }
  updateCardElements() {
    let { viewportHeight, windowWidth } = this.props,
        { transformRotate } = helpers,
        cardsTop    = this.dimensionsThree.top,
        cardsBottom = this.dimensionsThree.bottom,
        cardsHeight = this.elementThreeHeight,
        cardsNodes  = document.querySelectorAll(".cards-cards__item"),
        cardsArray  = [...cardsNodes],
        context     = (cardsTop - viewportHeight) * -1,
        relativeY   = (context / (cardsHeight * 2));

    (context >= cardsHeight / 3) ? this.elementThree.classList.add("active") : this.elementThree.classList.remove("active");

    if (context >= 0 && cardsBottom >= 0) {
      transformRotate(cardsArray[0], this.position(0, -25, relativeY, 0));
      transformRotate(cardsArray[1], this.position(0,  25, relativeY, 0));
      transformRotate(cardsArray[2], this.position(0, -25, relativeY, 0));
    }
    this.tickingThree = false;
  }
  updateEndingElements() {
    let { viewportHeight, windowWidth } = this.props,
        { transformThreeD } = helpers,
        cardboxTop          = this.dimensionsFour.top,
        cardboxBottom       = this.dimensionsFour.bottom,
        cardboxHeight       = this.elementFourHeight,
        cardboxNodes        = document.querySelectorAll(".cardbox-ending__item"),
        cardboxArray        = [...cardboxNodes],
        viewportHeightPlus  = viewportHeight * 1.05,
        context             = (cardboxTop - (viewportHeight * .75) ) * -1,
        contextPlus         = context - (cardboxHeight * .6),
        relativeY           = (context / (cardboxHeight)),
        relativeYPlus       = (contextPlus / (cardboxHeight)),
        values              = [],
        buyButton           = findDOMNode(this.refs.buy),
        showButtonValue     = 0,
        movement1             = cardboxHeight * .08,
        movement2             = cardboxHeight * (-.2),
        movement3             = cardboxHeight * (-.1),
        movement4             = cardboxHeight * .01,
        movement5             = cardboxHeight * .165;

    if (windowWidth <= 640) {
      values = [ [-10, 10], [-140, 240], [-80, 180], [-30, 100], [60, -60] ]
      showButtonValue = 75;
    } else {
      showButtonValue = 150;
      values = [ [-20, 20], [-220, 280], [-120, 220], [-10, 140], [120, -120] ];
    }

    if (context >= 0 && cardboxBottom >= 0) {
      transformThreeD(cardboxArray[0], -50, "%",  this.position((movement1 * -1), movement1, relativeYPlus * 2.75, 0), "px", 0, "px");
      transformThreeD(cardboxArray[1], -50, "%",  this.position((movement1 * -1), movement1, relativeYPlus * 2.75, 0), "px", 0, "px");

      transformThreeD(cardboxArray[2], -50, "%",  this.position(movement2,       (movement2 * -1), relativeY * 1.5,     0), "px", 0, "px");
      transformThreeD(cardboxArray[3], -50, "%",  this.position(movement3,       (movement3 * -1), relativeY * 1.5,     0), "px", 0, "px");
      transformThreeD(cardboxArray[4], -50, "%",  this.position((movement4 * -1), movement4,       relativeY * 1.5,     0), "px", 0, "px");
      transformThreeD(cardboxArray[5], -50, "%",  this.position(movement5,       (movement5 * -1), relativeY * 1.5,   0), "px", 0, "px");
    }

    (context >= showButtonValue) ? buyButton.classList.add("active") : buyButton.classList.remove("active");

    this.tickingFour = false;
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
        eight : require("../../../../../../../images/work/run-it-once/hero/two-cards.png")
			},
      cardbox: {
        lid     : require("../../../../../../../images/work/run-it-once/hero/lid-lip.png"),
        lidBack : require("../../../../../../../images/work/run-it-once/hero/lid-open.png"),
        front   : require("../../../../../../../images/work/run-it-once/hero/box-front-01.png"),
        card    : require("../../../../../../../images/work/run-it-once/hero/card.png")
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
              <img src={img.cardbox.lid}     className="cardbox__item cardbox__item--lid"     />
              <img src={img.cardbox.lidBack} className="cardbox__item cardbox__item--lidback" />
              <img src={img.cardbox.card}    className="cardbox__item cardbox__item--card"    />
              <img src={img.cardbox.card}    className="cardbox__item cardbox__item--card"    />
              <img src={img.cardbox.card}    className="cardbox__item cardbox__item--card"    />
              <img src={img.cardbox.front}   className="cardbox__item cardbox__item--front"   />
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
              <div className="intrinsic">
                <div className="intrinsic__inner intrinsic__inner--full">
                  <div className="intrinsic__inner-magic" style={{backgroundImage: `url(${img.gallery.one})`}}></div>
                </div>
              </div>
						</div>
            <div className="grid-1-2">
              <div className="intrinsic">
                <div className="intrinsic__inner intrinsic__inner--half">
                  <div className="intrinsic__inner-magic" style={{backgroundImage: `url(${img.gallery.two})`}}></div>
                </div>
              </div>
              <div className="intrinsic">
                <div className="intrinsic__inner intrinsic__inner--half">
                  <div className="intrinsic__inner-magic" style={{backgroundImage: `url(${img.gallery.three})`}}></div>
                </div>
              </div>
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
              <div className="intrinsic">
                <div className="intrinsic__inner intrinsic__inner--full">
                  <div className="intrinsic__inner-magic" style={{backgroundImage: `url(${img.gallery2.one})`}}></div>
                </div>
              </div>
            </div>
						<div className="grid-1-3">
              <div className="intrinsic">
                <div className="intrinsic__inner intrinsic__inner--full">
                  <div className="intrinsic__inner-magic" style={{backgroundImage: `url(${img.gallery2.two})`}}></div>
                </div>
              </div>
            </div>
						<div className="grid-1-3">
              <div className="intrinsic">
                <div className="intrinsic__inner intrinsic__inner--full">
                  <div className="intrinsic__inner-magic" style={{backgroundImage: `url(${img.gallery2.three})`}}></div>
                </div>
              </div>
            </div>
					</section>
          <div ref="ending" className="hero--rio hero--rio--final">
            <a ref="buy" href="#" className="button buy-button">buy em now</a>
            <div id="cardBox" className="cardbox" ref="cardbox">
              <img src={img.cardbox.lid}     className="cardbox-ending__item cardbox-ending__item--lid"   />
              <img src={img.cardbox.lidBack} className="cardbox-ending__item cardbox-ending__item--lidback" />
              <img src={img.cardbox.card}    className="cardbox-ending__item cardbox-ending__item--card"  />
              <img src={img.cardbox.card}    className="cardbox-ending__item cardbox-ending__item--card"  />
              <img src={img.cardbox.card}    className="cardbox-ending__item cardbox-ending__item--card"  />
              <img src={img.cardbox.front}   className="cardbox-ending__item cardbox-ending__item--front" />
            </div>
          </div>
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
