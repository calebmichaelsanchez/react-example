import React, { Component } from 'react';
import ReactDom, { findDOMNode } from 'react-dom';
import classNames from 'classnames';
import DocumentTitle from 'react-document-title';
import SeeMore from "../../../shared/SeeMore";
import helpers from "../../../../../../../shared/util/helpers";

class SizzlingPlatter extends Component {
	constructor(props) {
		super(props);
   //  this.onScroll              = this.onScroll.bind(this);
   //  this.position              = this.position.bind(this);
   //  this.limit                 = this.limit.bind(this);
   //  this.isInViewport          = this.isInViewport.bind(this);
   //  this.updateCardboxElements = this.updateCardboxElements.bind(this);
   //  this.updateDeckElements    = this.updateDeckElements.bind(this);
   //  this.updateCardElements    = this.updateCardElements.bind(this);
   //  this.requestTick           = this.requestTick.bind(this);
   //  this.updateEndingElements  = this.updateEndingElements.bind(this);
	}
	componentDidMount() {
    this.lastKnownScroll = 0;
    this.ticking         = false;
    this.throttledScroll = helpers.throttle(this.onScroll, 30);
		ga('send', 'pageview', '/making-it-awesome-with/sizzling-platter');
		this.props.setNavTheme(this.props.theme);
		window.addEventListener("scroll", this.throttledScroll, false);
	}
  componentWillUnmount() {
    window.removeEventListener("scroll", this.throttledScroll, false);
  }
  onScroll() {
    this.lastKnownScroll = window.pageYOffset;
    this.requestTick();
  }
  requestTick() {
    if(!this.ticking) {
      window.requestAnimFrame(this.updateCardboxElements);
      window.requestAnimFrame(this.updateDeckElements);
      window.requestAnimFrame(this.updateCardElements);
      window.requestAnimFrame(this.updateEndingElements);
    }
    this.ticking = true;
  }
  // updateCardboxElements() {
  //   this.ticking = false ;
  //   let { viewportHeight, windowWidth }  = this.props,
  //       { transformThreeD }   = helpers,
  //       currentScrollPosition = this.lastKnownScroll,
  //       cardboxContainer      = findDOMNode(this.refs.rioHero),
  //       cardboxDimensions     = cardboxContainer.getBoundingClientRect(),
  //       cardboxBottom         = cardboxDimensions.bottom,
  //       cardboxHeight         = cardboxContainer.clientHeight,
  //       cardboxNodes          = document.querySelectorAll(".cardbox__item"),
  //       cardboxArray          = [...cardboxNodes],
  //       context               = (currentScrollPosition - viewportHeight) * -1,
  //       relativeY             = (currentScrollPosition / cardboxHeight),
  //       values                = [];
  //
  //   (windowWidth <= 640) ? values = [ 80/2, -120/2, -40/2, 40/2.25, 160/1.5] : values = [ 80, -120, -40, 40, 160 ];
  //
  //   if (context >= 0 && cardboxBottom >= 0) {
  //     transformThreeD(cardboxArray[0], -50, "%",  this.position(0, values[0], relativeY, 0), "px", 0, "px");
  //     transformThreeD(cardboxArray[1], -50, "%",  this.position(0, values[1], relativeY, 0), "px", 0, "px");
  //     transformThreeD(cardboxArray[2], -50, "%",  this.position(0, values[2], relativeY, 0), "px", 0, "px");
  //     transformThreeD(cardboxArray[3], -50, "%",  this.position(0, values[3], relativeY, 0), "px", 0, "px");
  //     transformThreeD(cardboxArray[4], -50, "%",  this.position(0, values[4], relativeY, 0), "px", 0, "px");
  //   }
  // }
  // updateDeckElements() {
  //   this.setState({ ticking: false });
  //   let { viewportHeight, windowWidth }  = this.props,
  //       { transformThreeD }   = helpers,
  //       deckContainer  = findDOMNode(this.refs.deck),
  //       deckDimensions = deckContainer.getBoundingClientRect(),
  //       deckTop        = deckDimensions.top,
  //       deckBottom     = deckDimensions.bottom,
  //       deckHeight     = deckContainer.clientHeight,
  //       deckNodes      = document.querySelectorAll(".deck-cards__item"),
  //       deckArray      = [...deckNodes],
  //       context        = (deckTop - viewportHeight) * -1,
  //       relativeY      = (context / (deckHeight * 2)),
  //       values         = [];
  //
  //   (windowWidth <= 768) ? values = [ [25], [-50, -145] ] : values = [ [100], [0, -220] ];
  //
  //   if (context >= 0 && deckBottom >= 0) {
  //     transformThreeD(deckArray[0], values[1][0], "%", this.position(values[0][0], values[1][1], relativeY, 0), "px", 0, "px");
  //     transformThreeD(deckArray[1], values[1][0], "%", this.position(values[0][0], values[1][1], relativeY * .8, 0), "px", 0, "px");
  //     transformThreeD(deckArray[2], values[1][0], "%", this.position(values[0][0], values[1][1], relativeY * .6, 0), "px", 0, "px");
  //     transformThreeD(deckArray[3], values[1][0], "%", this.position(values[0][0], values[1][1], relativeY * .4, 0), "px", 0, "px");
  //     transformThreeD(deckArray[4], values[1][0], "%", this.position(values[0][0], values[1][1], relativeY * .2, 0), "px", 0, "px");
  //     transformThreeD(deckArray[5], values[1][0], "%", this.position(values[0][0], values[1][1], relativeY * .15, 0), "px", 0, "px");
  //   }
  // }
  // updateCardElements() {
  //   this.setState({ ticking: false });
  //   let { viewportHeight, windowWidth }  = this.props,
  //       { transformRotate }              = helpers,
  //       cardsContainer  = findDOMNode(this.refs.cards),
  //       cardsDimensions = cardsContainer.getBoundingClientRect(),
  //       cardsTop        = cardsDimensions.top,
  //       cardsBottom     = cardsDimensions.bottom,
  //       cardsHeight     = cardsContainer.clientHeight,
  //       cardsNodes      = document.querySelectorAll(".cards-cards__item"),
  //       cardsArray      = [...cardsNodes],
  //       context         = (cardsTop - viewportHeight) * -1,
  //       relativeY       = (context / (cardsHeight * 2));
  //
  //   if (context >= 0 && cardsBottom >= 0) {
  //     transformRotate(cardsArray[0], this.position(0, -15, relativeY, 0));
  //     transformRotate(cardsArray[1], this.position(0,  15, relativeY, 0));
  //     transformRotate(cardsArray[2], this.position(0, -15, relativeY, 0));
  //   }
  // }
  // updateEndingElements() {
  //   this.ticking = false ;
  //   let { viewportHeight, windowWidth }  = this.props,
  //       { transformThreeD }   = helpers,
  //       currentScrollPosition = this.lastKnownScroll,
  //       cardboxContainer      = findDOMNode(this.refs.ending),
  //       cardboxDimensions     = cardboxContainer.getBoundingClientRect(),
  //       cardboxTop            = cardboxDimensions.top,
  //       cardboxBottom         = cardboxDimensions.bottom,
  //       cardboxHeight         = cardboxContainer.clientHeight,
  //       cardboxNodes          = document.querySelectorAll(".cardbox-ending__item"),
  //       cardboxArray          = [...cardboxNodes],
  //       viewportHeightPlus    = viewportHeight * 1.05,
  //       context               = (cardboxTop - viewportHeight) * -1,
  //       contextPlus           = context - 250,
  //       relativeY             = (context / cardboxHeight),
  //       values                = [],
  //       buyButton             = findDOMNode(this.refs.buy),
  //       showButtonValue       = 0;
  //
  //   if (windowWidth <= 640) {
  //     values = [ [-10, 10], [-140, 240], [-80, 180], [-30, 100], [60, -60] ]
  //     showButtonValue = 350;
  //   } else {
  //     showButtonValue = 500;
  //     values = [ [-20, 20], [-220, 280], [-120, 220], [-10, 140], [120, -120] ];
  //   }
  //
  //   if (context >= 0 && cardboxBottom >= 0) {
  //     // transformThreeD(cardboxArray[0], -50, "%",  this.position(values[0][0], values[0][1], relativeY, 0), "px", 0, "px");
  //     // transformThreeD(cardboxArray[1], -50, "%",  this.position(values[1][0], values[1][1], relativeY * 2, 0), "px", 0, "px");
  //     // transformThreeD(cardboxArray[2], -50, "%",  this.position(values[2][0], values[2][1], relativeY * 2, 0), "px", 0, "px");
  //     // transformThreeD(cardboxArray[3], -50, "%",  this.position(values[3][0], values[3][1], relativeY * 2, 0), "px", 0, "px");
  //     // transformThreeD(cardboxArray[4], -50, "%",  this.position(values[4][0], values[4][1], relativeY * 1.15, 0), "px", 0, "px");
  //
  //     transformThreeD(cardboxArray[0], -50, "%",  this.position(values[0][0], values[0][1], relativeY * .75, 0), "px", 0, "px");
  //     transformThreeD(cardboxArray[1], -50, "%",  this.position(values[1][0], values[1][1], relativeY * 1.5, 0), "px", 0, "px");
  //     transformThreeD(cardboxArray[2], -50, "%",  this.position(values[2][0], values[2][1], relativeY * 1.5, 0), "px", 0, "px");
  //     transformThreeD(cardboxArray[3], -50, "%",  this.position(values[3][0], values[3][1], relativeY * 1.5, 0), "px", 0, "px");
  //     transformThreeD(cardboxArray[4], -50, "%",  this.position(values[4][0], values[4][1], relativeY * .75, 0), "px", 0, "px");
  //   }
  //
  //   (context >= showButtonValue) ? buyButton.classList.add("active") : buyButton.classList.remove("active");
  // }
  // position(base, range, relativeY, offset) {
  //   let returnVal = base + this.limit(0, 1, relativeY - offset) * range;
  //   return returnVal;
  // }
  // limit(min, max, value) {
  //   return Math.max(min, Math.min(max, value));
  // }
  // isInViewport(elem) {
  //   let distance = elem.getBoundingClientRect(), { viewportHeight } = this.props;
  //   return (distance.bottom > 0 && distance.top < viewportHeight);
  // }
	render() {
		let img = {
			hero: {
	        mobile   : require("../../../../../../../images/work/sizzling-platter/hero/hero--splat-mobile.png"),
	        tablet : require("../../../../../../../images/work/sizzling-platter/hero/hero--splat-tablet.png")
			},
			patterns: {
				peppers		: require("../../../../../../../images/work/sizzling-platter/patterns/peppers.png"),
				pepperonis	: require("../../../../../../../images/work/sizzling-platter/patterns/pepperonis.png"),
				sprinkles	: require("../../../../../../../images/work/sizzling-platter/patterns/sprinkles.png")
			},
			ingredients: {
				bg		: require("../../../../../../../images/work/sizzling-platter/ingredients/bg.png"),
				one	: require("../../../../../../../images/work/sizzling-platter/ingredients/01.png"),
				two	: require("../../../../../../../images/work/sizzling-platter/ingredients/02.png"),
				three : require("../../../../../../../images/work/sizzling-platter/ingredients/03.png"),
				four  : require("../../../../../../../images/work/sizzling-platter/ingredients/04.png")
			},
			designDev : {
				bgLeft  : require("../../../../../../../images/work/sizzling-platter/design-dev/design-dev-bg-left.png"),
				bgRight : require("../../../../../../../images/work/sizzling-platter/design-dev/design-dev-bg-right.png"),
				iphone  : require("../../../../../../../images/work/sizzling-platter/design-dev/design-dev-iphone.png"),
				laptop  : require("../../../../../../../images/work/sizzling-platter/design-dev/design-dev-laptop.png")
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
			<DocumentTitle title="Sizzling Platter | Underbelly Creative">
				<div className="case-study sizzling-platter">
					<div className="hero--splat" ref="heroSplat"></div>

					<div className="prep" ref="prep">
						<div className="prep-container">
							<div className="prep-container__item prep-copy">
								<h1>PREPARATION</h1>
								<p>Sizzling Platter is a conglomerate of several restaurant chains in the great Salt Lake Valley which includes Dunkin’ Donuts, Red Robin, Little Caesars, and Sizzler. The SPLAT team approached Underbelly with the goal of overhauling its corporate website.  Upon initial discussion, it was determined the priorities would be to improve interaction of prospective employees, better illustrate company culture, and share the SPLAT story in a more engaging light.</p>
								<p>The goal for the site was also to simplify the flow of the site so users could easily find pertinent information, whether its contact information or employment opportunities. Additionally, Sizzling Platter wanted to be able to showcase all the current brands, as well as others acquired down the road.</p>
							</div>
							<a href="#" className="button">Web Design</a> <a href="#" className="button">Photography</a> <a href="#" className="button">Development</a>
						</div>
					</div>

					<div className="ingredients">
						<div className="ingredients-container">
							<div className="ingredients-container__item ingredients-copy">
								<h1>THE INGREDIENTS</h1>
								<p>The Underbelly team loves to incorporate custom photography whenever possible. We knew from day one we’d want to embark on a photoshoot for this project. We wanted crisp, clean photos taken at actual SPAT locations around the valley, not boring stock photos. Not only did get great shots on location, but we held an in-house photoshoot to get shots of ingredients like pepperoni, mushrooms, and even sprinkles! Pulling together high quality, custom photos allowed the best assets possible for our client and the site…nevermind the fact that it left us craving pizza and donuts every time we worked on the site.</p>
							</div>
							<div className="ingredients-container__item ingredients-gallery">
								<div className="ingredients-gallery__item grid-1-4"><img src={img.ingredients.one} /></div>
								<div className="ingredients-gallery__item grid-1-4"><img src={img.ingredients.two} /></div>
								<div className="ingredients-gallery__item grid-1-4"><img src={img.ingredients.three} /></div>
								<div className="ingredients-gallery__item grid-1-4"><img src={img.ingredients.four} /></div>
							</div>
						</div>
					</div>

					<div className="design--dev">
						<div className="design--dev-container">
							<div className="design--dev-container__item copy-01">
								<h1>MADE TO ORDER</h1>
								<p>It was important to make this revamped site inviting for both investors and potential employees. SPLAT is poud of the cultural diversity within their family. To celebrate this, we wanted to make the site inviting for all audiences. Throughout the site we showcase Sizzling Platter’s investment in their ever expanding SPLAT family, diversity, and strong company values.</p>
								<img src={img.ingredients.one} />
							</div>

							<div className="design--dev-container__item copy-02">
								<h1>CUSTOM EXPERIENCE<br /> VIA SQUARESPACE</h1>
								<p>We chose Squarespace for our content management system to allow easy modification with a great custom design. Although the Squarespace Development Platform is still in its infancy, the development team was able to pour though documentation to create a beautiful website that combines Squarespace’s wonderful backend with React based front-end. Using React in conjunction with Axios we were able to leverage the way Squarespace exposes site data to create clean, reusable components.</p>
							</div>

							<div className="design--dev-container__item copy-03">
								<h1>SERVING THE PEOPLE</h1>
								<p>One of our primary goals for the Sizzling Platter redesign was to highlight their focus on company culture. Sizzling Platter strives to uphold a diverse culture and strong core values from the highest level of stakeholder to potential employees. By tying in human elements throughout the site, we hope the SPLAT culture resonates with visitors as much as it did with our team!</p>
							</div>
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

SizzlingPlatter.propTypes = {
	name: React.PropTypes.string,
	theme: React.PropTypes.string,
	setNavTheme: React.PropTypes.func
}

SizzlingPlatter.defaultProps = {
	name: 'sizzling-platter',
	theme: 'dark'
}

export default SizzlingPlatter;
