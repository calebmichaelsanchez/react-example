import React, { Component } from 'react';
import ReactDom, { findDOMNode } from 'react-dom';
// import classNames from 'classnames';

import DocumentTitle from 'react-document-title';
import SeeMore from "../../../shared/SeeMore";

function isInViewport(element) {
  var rect = element.getBoundingClientRect();
  var html = document.documentElement;
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || html.clientHeight) &&
    rect.right <= (window.innerWidth || html.clientWidth)
  );
}

class RunItOnce extends Component {
	constructor(props) {
		super(props);
		this.handleScroll = this.handleScroll.bind(this);
	}

	componentDidMount() {
		ga('send', 'pageview', '/making-it-awesome-with/run-it-once');
		this.props.setNavTheme(this.props.theme);

		var deck = findDOMNode(this.refs.deck),
			 deckCard01 = findDOMNode(this.refs.deckCard01);

			//  var deckImg = deck.getElementsByTagName("img");
			//  console.log(deckImg);

		window.addEventListener("scroll", this.handleScroll);
	}

   handleScroll() {
      var offset = window.scrollY;
      var test = this.refs.deck.getBoundingClientRect();

      if (offset > 400) {
         console.log(test);
         // document.getElementById("myDIV").style.transform = "rotate(7deg)";
         this.refs.deckCard01.style.transform = "translateY(-" + offset / 25 +"px)";
      }

   }

	render() {


		let img = {

			hero: {
				one:   require("../../../../../../../images/work/run-it-once/hero/rio-logo.png"),
				two:   require("../../../../../../../images/work/run-it-once/hero/box-front.png"),
				three: require("../../../../../../../images/work/run-it-once/hero/card-01.png"),
				four:  require("../../../../../../../images/work/run-it-once/hero/card-02.png"),
				five:  require("../../../../../../../images/work/run-it-once/hero/card-03.png"),
				six:   require("../../../../../../../images/work/run-it-once/hero/lid-closed.png"),
				seven:   require("../../../../../../../images/work/run-it-once/hero/lid-open.png"),
				eight:   require("../../../../../../../images/work/run-it-once/hero/two-cards.png")
			},
			deck: {
				one:   require("../../../../../../../images/work/run-it-once/deck/01.png"),
				two:   require("../../../../../../../images/work/run-it-once/deck/02.png"),
				three: require("../../../../../../../images/work/run-it-once/deck/03.png"),
				four:  require("../../../../../../../images/work/run-it-once/deck/04.png"),
				five:  require("../../../../../../../images/work/run-it-once/deck/05.png"),
				six:   require("../../../../../../../images/work/run-it-once/deck/06.png")
			},
			gallery: {
				one: require("../../../../../../../images/work/run-it-once/gallery/1.png"),
				two: require("../../../../../../../images/work/run-it-once/gallery/2.png"),
				three: require("../../../../../../../images/work/run-it-once/gallery/3.png")
			},
			cards: {
				one: require("../../../../../../../images/work/run-it-once/cards/1.png"),
				two: require("../../../../../../../images/work/run-it-once/cards/2.png"),
				three: require("../../../../../../../images/work/run-it-once/cards/3.png")
			},
			gallery2: {
				one: require("../../../../../../../images/work/run-it-once/gallery2/1.png"),
				two: require("../../../../../../../images/work/run-it-once/gallery2/2.png"),
				three: require("../../../../../../../images/work/run-it-once/gallery2/3.png")
			},
			lifestyle: require("../../../../../../../images/work/fluid/lifestyle/01.jpg"),
			seeMore: {
				one:   require("../../../../../../../images/work/see-more/hive.jpg"),
				two:   require("../../../../../../../images/work/see-more/just-family.jpg"),
				three: require("../../../../../../../images/work/see-more/nsac.jpg"),
				four:  require("../../../../../../../images/work/see-more/rent-tree.jpg")
			}
		}

		return (
			<DocumentTitle title="Run It Once | Underbelly Creative">
				<div className="case-study run-it-once">
					<section id="rio-hero" className="hero">
						<img src={img.hero.one} alt=""/>

						<div className="card-box">
							<img src={img.hero.three} alt=""/>j
							<img src={img.hero.four} alt=""/>
							<img src={img.hero.five} alt=""/>
							<img src={img.hero.six} alt=""/>
							<img src={img.hero.seven} alt=""/>
							<img src={img.hero.two} alt=""/>
						</div>

					</section>

					<section className="two-cards">
					</section>

					<section className="case-study-deck" ref="deck">
						<div className="container-sm">
							<div className="grid-1-2">
								<img src={img.deck.one} className="deckCard" ref="deckCard01" />
								<img src={img.deck.two} className="deckCard" ref="deckCard02" />
								<img src={img.deck.three} className="deckCard" ref="deckCard03" />
								<img src={img.deck.four} className="deckCard" ref="deckCard04" />
								<img src={img.deck.five} className="deckCard" ref="deckCard05" />
								<img src={img.deck.six} className="deckCard" ref="deckCard06" />
							</div>

							<div className="grid-1-2 grid-copy">
								<p>Run It Once, created by legendary poker player Phil Galfond, is a place for poker enthusiasts to gather and contribute professional-level strategy with others in the poker community. Besides the wealth of knowledge available at Run It Once, RIO’s brand is one classy act. With a clean, professional, and luxurious logo its no wonder their site is one of the best looking (and functioning) poker communities out there.</p>

								<p>At Underbelly, we’re suckers for playing card designs. That’s one of the many reasons we were stoked to partner with Phil and the Run It Once crew on designing the first official Run It Once card deck.</p>
							</div>
						</div>
					</section>

					<section className="case-study-gallery">
						<div className="grid-1-2">
							<img width="100%" className="galleryImg one" src={img.gallery.one} alt=""/>
						</div>
						<div className="grid-1-2">
							<img width="100%" className="galleryImg two" src={img.gallery.two} alt=""/>
							<img width="100%" className="galleryImg three" src={img.gallery.three} alt=""/>
						</div>
					</section>

					<section className="case-study-cards">
						<div className="grid-1-2 grid-copy">
							<p>Matching the palatial look and feel of Run It Once’s brand was no small feat. We took multiple approaches before finally landing on a style that was sleek, geometric, and modern. Each suit was designed with a unique personality to give the deck depth and variety while still remaining true to RIO’s brand. Diamonds crafted to be rugged and adventurous, spades strong and ruthless, clubs secretive and seductive, and hearts trustworthy and approachable.</p>

							<p>The finished product is a world-class, unique deck of cards worthy of the most talented professional poker hands. However, no need to worry; you don’t have to have a bracelet under your belt to enjoy these cards. Anyone can purchase these beauties directly from RIO’s site- even if you’re one of those casual, low-stakes, hold-em folks. If you’re anything like us, you can’t pass up a hot deck of cards.</p>
						</div>
						<div className="grid-1-2">
							<img src={img.cards.one} className="card" alt=""/>
							<img src={img.cards.two} className="card" alt=""/>
							<img src={img.cards.three} className="card" alt=""/>
						</div>
					</section>

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

					<section className="case-study-final hero">
						<div className="grid-1-2">
							buy em now
						</div>
						<div className="grid-1-2">
							<div className="card-box">
								<img src={img.hero.three} alt=""/>
								<img src={img.hero.four} alt=""/>
								<img src={img.hero.five} alt=""/>
								<img src={img.hero.six} alt=""/>
								<img src={img.hero.seven} alt=""/>
								<img src={img.hero.two} alt=""/>
							</div>
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
	theme: 'light'
}
export default RunItOnce;
