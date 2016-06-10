import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import Hero from './components/Hero';
import Prep from './components/Prep';
import Patterns from './components/Patterns';
import Ingredients from './components/Ingredients';
import Gallery from './components/Gallery';
import DesignDev from './components/DesignDev';
import SeeMore from '../../shared/SeeMore';
import { images } from './Data';

class Splat extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    window.WebFont.load({'google':{'families':['Lato:300,400']}});
    window.ga('send', 'pageview', '/making-it-awesome-with/sizzling-platter');
    this.props.setNavTheme(this.props.theme);
  }
  render() {
    return (
      <DocumentTitle title="Sizzling Platter | Underbelly Creative">
        <div className="case-study sizzling-platter">
          <Hero hero={images.hero} />
          <Prep viewportHeight={this.props.viewportHeight} />
          <Patterns patterns={images.patterns} viewportHeight={this.props.viewportHeight} windowWidth={this.props.windowWidth} />
          <Ingredients ingredients={images.ingredients} viewportHeight={this.props.viewportHeight} />
          <Gallery gallery={images.ingredients} viewportHeight={this.props.viewportHeight} />
          <DesignDev designDev={images.designDev} viewportHeight={this.props.viewportHeight} windowWidth={this.props.windowWidth}/>
          <SeeMore items={[
            { 'url': 'hive', 'title': 'Hive', 'img': images.seeMore.one },
            { 'url': 'just-family', 'title': 'Just Family', 'img': images.seeMore.two },
            { 'url': 'nsac', 'title': 'North Seathlle Alliance Church', 'img': images.seeMore.three },
            { 'url': 'rent-tree', 'title': 'RentTree', 'img': images.seeMore.four }
          ]} />
        </div>
      </DocumentTitle>
    );
  }
}

Splat.propTypes = {
  'name': React.PropTypes.string,
  'theme': React.PropTypes.string,
  'setNavTheme': React.PropTypes.func,
  'viewportHeight': React.PropTypes.number.isRequired,
  'windowWidth': React.PropTypes.number.isRequired
};

Splat.defaultProps = {
  'name': 'sizzling-platter',
  'theme': 'dark'
};

export default Splat;
