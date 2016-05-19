import React, { Component } from 'react';
import ReactDom, { findDOMNode } from 'react-dom';
import classNames from 'classnames';
import DocumentTitle from 'react-document-title';
import helpers from "../../../../../../shared/util/helpers";
import Hero from "./components/Hero";
import Prep from "./components/Prep";
import Patterns from "./components/Patterns";
import Ingredients from "./components/Ingredients";
import Gallery from "./components/Gallery";
import DesignDev from "./components/DesignDev";
import SeeMore from "../../shared/SeeMore";

class Splat extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    // may do a few interesting things here:
    // - WebFontLoader to pull in Google/TypeKit fonts
    // WebFont.load({googl:{families:['Droid Sans', 'Lato']}})
    ga('send', 'pageview', '/making-it-awesome-with/sizzling-platter');
    this.props.setNavTheme(this.props.theme);
  }
  render() {
    let img = {
      hero: {
        one   : require("../../../../../../images/work/sizzling-platter/hero/hero-screen-front.png"),
        two   : require("../../../../../../images/work/sizzling-platter/hero/hero-screen-left.png"),
        three : require("../../../../../../images/work/sizzling-platter/hero/hero-screen-right.png")
      },
      patterns: {
        swatches   : require("../../../../../../images/work/sizzling-platter/patterns/swatches.png"),
        peppers    : require("../../../../../../images/work/sizzling-platter/patterns/peppers.png"),
        pepperonis : require("../../../../../../images/work/sizzling-platter/patterns/pepperonis.png"),
        sprinkles  : require("../../../../../../images/work/sizzling-platter/patterns/sprinkles.png")
      },
      ingredients: {
        bg    : require("../../../../../../images/work/sizzling-platter/ingredients/bg.png"),
        crsl  : require("../../../../../../images/work/sizzling-platter/ingredients/carousel.png"),
        one   : require("../../../../../../images/work/sizzling-platter/ingredients/01_sm.png"),
        two   : require("../../../../../../images/work/sizzling-platter/ingredients/02_sm.png"),
        three : require("../../../../../../images/work/sizzling-platter/ingredients/03_sm.png"),
        four  : require("../../../../../../images/work/sizzling-platter/ingredients/04_sm.png")
      },
      designDev : {
        bgLeft  : require("../../../../../../images/work/sizzling-platter/design-dev/design-dev-bg-left.png"),
        bgRight : require("../../../../../../images/work/sizzling-platter/design-dev/design-dev-bg-right.png"),
        iphone  : require("../../../../../../images/work/sizzling-platter/design-dev/iphone.png"),
        iphoneBgLeft  : require("../../../../../../images/work/sizzling-platter/design-dev/iphone-bg-left.png"),
        iphoneBgRight  : require("../../../../../../images/work/sizzling-platter/design-dev/iphone-bg-right.png"),
        squarespace  : require("../../../../../../images/work/sizzling-platter/design-dev/squarespace.png"),
        redClose  : require("../../../../../../images/work/sizzling-platter/design-dev/red-close.png"),
        greyClose  : require("../../../../../../images/work/sizzling-platter/design-dev/grey-close.png"),
        greyFar  : require("../../../../../../images/work/sizzling-platter/design-dev/grey-far.png"),
        laptop  : require("../../../../../../images/work/sizzling-platter/design-dev/laptop.png")
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
      <DocumentTitle title="Sizzling Platter | Underbelly Creative">
        <div className="case-study sizzling-platter">

          <Hero hero={img.hero} {...this.props} />
          
          <Prep {...this.props} />
          
          <Patterns patterns={img.patterns} {...this.props} />

          <Ingredients ingredients={img.ingredients} {...this.props} />

          <Gallery gallery={img.ingredients} {...this.props} />

          <DesignDev designDev={img.designDev} {...this.props} />

          <SeeMore items={[
            { url: "hive", title: "Hive", img: img.seeMore.one },
            { url: "just-family", title: "Just Family", img: img.seeMore.two },
            { url: "nsac", title: "North Seathlle Alliance Church", img: img.seeMore.three },
            { url: "rent-tree", title: "RentTree", img: img.seeMore.four }
          ]} {...this.props} />

        </div>
      </DocumentTitle>
    );
  }
}

Splat.propTypes = {
  name: React.PropTypes.string,
  theme: React.PropTypes.string,
  setNavTheme: React.PropTypes.func
}

Splat.defaultProps = {
  name: 'sizzling-platter',
  theme: 'dark'
}

export default Splat;
