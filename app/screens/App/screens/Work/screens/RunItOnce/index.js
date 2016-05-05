import React, { Component } from 'react';
import ReactDom, { findDOMNode } from 'react-dom';
import DocumentTitle from 'react-document-title';
import SeeMore from "../../shared/SeeMore";
import helpers from "../../../../../../shared/util/helpers";
import RioHero from "./components/RioHero";
import TwoCards from "./components/TwoCards";
import Deck from "./components/Deck";
import Cards from "./components/Cards";
import FinalCards from "./components/FinalCards";
import GalleryOne from "./components/GalleryOne";
import GalleryTwo from "./components/GalleryTwo";
import WebFont from "webfontloader";

class RunItOnce extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    WebFont.load({
      google: {
        families: ['Montserrat']
      }
    });
  }
  componentDidMount() {
    ga('send', 'pageview', '/making-it-awesome-with/run-it-once');
    this.props.setNavTheme(this.props.theme);
  }
  render() {
    let img = {
      logo: require("../../../../../../images/work/run-it-once/hero/logo.svg"),
      hero: require("../../../../../../images/work/run-it-once/hero/hero.jpg"),
      cardbox: {
        lid     : require("../../../../../../images/work/run-it-once/hero/lid-lip.png"),
        lidBack : require("../../../../../../images/work/run-it-once/hero/lid-open.png"),
        front   : require("../../../../../../images/work/run-it-once/hero/box-front-01.png"),
        card    : require("../../../../../../images/work/run-it-once/hero/card.png")
      },
      deck: {
        one   : require("../../../../../../images/work/run-it-once/deck/01.png"),
        two   : require("../../../../../../images/work/run-it-once/deck/02.png"),
        three : require("../../../../../../images/work/run-it-once/deck/03.png"),
        four  : require("../../../../../../images/work/run-it-once/deck/04.png"),
        five  : require("../../../../../../images/work/run-it-once/deck/05.png"),
        six   : require("../../../../../../images/work/run-it-once/deck/06.png")
      },
      gallery: {
        one   : require("../../../../../../images/work/run-it-once/gallery/01-no-border.jpg"),
        two   : require("../../../../../../images/work/run-it-once/gallery/02-no-border.jpg"),
        three : require("../../../../../../images/work/run-it-once/gallery/03-no-border.jpg")
      },
      cards: {
        one   : require("../../../../../../images/work/run-it-once/cards/1.png"),
        two   : require("../../../../../../images/work/run-it-once/cards/2.png"),
        three : require("../../../../../../images/work/run-it-once/cards/3.png")
      },
      gallery2: {
        one   : require("../../../../../../images/work/run-it-once/gallery2/01-no-border.jpg"),
        two   : require("../../../../../../images/work/run-it-once/gallery2/02-no-border.jpg"),
        three : require("../../../../../../images/work/run-it-once/gallery2/03-no-border.jpg")
      },
      lifestyle : require("../../../../../../images/work/fluid/lifestyle/01.jpg"),
      seeMore: {
        one   : require("../../../../../../images/work/see-more/hive.jpg"),
        two   : require("../../../../../../images/work/see-more/just-family.jpg"),
        three : require("../../../../../../images/work/see-more/nsac.jpg"),
        four  : require("../../../../../../images/work/see-more/rent-tree.jpg")
      }
    }
    return (
      <DocumentTitle title="Run It Once | Underbelly Creative">
        <div className="case-study run-it-once">
          <RioHero logo={img.logo} cardbox={img.cardbox} {...this.props} />
          <TwoCards hero={img.hero} />
          <Deck deck={img.deck} {...this.props} />
          <GalleryOne gallery={img.gallery} />
          <Cards cards={img.cards} {...this.props} />
          <GalleryTwo gallery2={img.gallery2} />
          <FinalCards cardbox={img.cardbox} {...this.props} />
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
