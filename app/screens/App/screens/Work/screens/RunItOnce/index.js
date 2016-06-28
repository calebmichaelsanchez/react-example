import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import SeeMore from '../../shared/SeeMore';
import { images } from './Data';
import RioHero from './components/RioHero';
import TwoCards from './components/TwoCards';
import Deck from './components/Deck';
import Cards from './components/Cards';
import FinalCards from './components/FinalCards';
import GalleryOne from './components/GalleryOne';
import GalleryTwo from './components/GalleryTwo';

class RunItOnce extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    window.ga('set', 'page', '/making-it-awesome-with/run-it-once');
    window.ga('send', 'pageview');
    window.scrollTo(0, 0);
    this.props.setNavTheme(this.props.theme);
  }
  render() {
    return (
      <DocumentTitle title="Run It Once | Underbelly Creative">
        <div className="case-study run-it-once">
          <RioHero logo={images.logo} cardbox={images.cardbox} />
          <TwoCards hero={images.hero} />
          <Deck deck={images.deck} />
          <GalleryOne gallery={images.gallery} />
          <Cards cards={images.cards} />
          <GalleryTwo gallery2={images.gallery2} />
          <FinalCards cardbox={images.cardbox} />
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

RunItOnce.propTypes = {
  'name': React.PropTypes.string,
  'theme': React.PropTypes.string,
  'setNavTheme': React.PropTypes.func
};

RunItOnce.defaultProps = {
  'name': 'run-it-once',
  'theme': 'dark'
};

export default RunItOnce;
