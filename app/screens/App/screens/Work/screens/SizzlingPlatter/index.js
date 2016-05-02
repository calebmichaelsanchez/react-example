import React, { Component } from 'react';
import ReactDom, { findDOMNode } from 'react-dom';
import classNames from 'classnames';
import DocumentTitle from 'react-document-title';
import SeeMore from "../../shared/SeeMore";
import helpers from "../../../../../../shared/util/helpers";
import Hero from "./components/Hero";
import Prep from "./components/Prep";
import Patterns from "./components/Patterns";
import Ingredients from "./components/Ingredients";
import Gallery from "./components/Gallery";

class Splat extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
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
        one   : require("../../../../../../images/work/sizzling-platter/ingredients/01.png"),
        two   : require("../../../../../../images/work/sizzling-platter/ingredients/02.png"),
        three : require("../../../../../../images/work/sizzling-platter/ingredients/03.png"),
        four  : require("../../../../../../images/work/sizzling-platter/ingredients/04.png")
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

          <Hero hero={img.hero} />
          <Prep />
          <Patterns patterns={img.patterns} />

          <Ingredients ingredients={img.ingredients} />

          <Gallery crsl={img.ingredients.crsl} />

          <div className="design--dev">
              <div className="design--dev__item copy-01">
                <h1>MADE TO ORDER</h1>
                <p>It was important to make this revamped site inviting for both investors and potential employees. SPLAT is poud of the cultural diversity within their family. To celebrate this, we wanted to make the site inviting for all audiences. Throughout the site we showcase Sizzling Platter’s investment in their ever expanding SPLAT family, diversity, and strong company values.</p>
              </div>

              <div className="design--dev__item iphone">
                <img className="iphone__item" src={img.designDev.iphone} />
                <img className="iphone__item" src={img.designDev.iphoneBgLeft} />
                <img className="iphone__item" src={img.designDev.iphoneBgRight} />
              </div>

              <img className="ss" src={img.designDev.squarespace} />

              <div className="design--dev__item squarespace">
                <h1>CUSTOM EXPERIENCE <br />VIA SQUARESPACE</h1>
                <p>We chose Squarespace for our content management system to allow easy modification with a great custom design. Although the Squarespace Development Platform is still in its infancy, the development team was able to pour though documentation to create a beautiful website that combines Squarespace’s wonderful backend with React based front-end. Using React in conjunction with Axios we were able to leverage the way Squarespace exposes site data to create clean, reusable components.</p>
                  <img className="squarespace__item" src={img.designDev.redClose} />
                  <img className="squarespace__item" src={img.designDev.greyClose} />
                  <img className="squarespace__item" src={img.designDev.greyFar} />
            </div>

              <div className="design--dev__item laptop">
                <img src={img.designDev.laptop} />
              </div>

              <div className="design--dev__item copy-03">
                <h1>SERVING THE PEOPLE</h1>
                <p>One of our primary goals for the Sizzling Platter redesign was to highlight their focus on company culture. Sizzling Platter strives to uphold a diverse culture and strong core values from the highest level of stakeholder to potential employees. By tying in human elements throughout the site, we hope the SPLAT culture resonates with visitors as much as it did with our team!</p>
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
