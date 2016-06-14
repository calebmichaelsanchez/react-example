import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import CampusHero from './components/Hero';
import Dubai from './components/Dubai';
import UserExperience from './components/UserExperience';
import Features from './components/Features';
import WebMobile from './components/WebMobile';
import Illustrations from './components/Illustrations';
import Development from './components/Development';
import { images } from './Data';

class Campus extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    window.ga('send', 'pageview', '/making-it-awesome-with/aiga');
    window.scrollTo(0, 0);
    this.props.setNavTheme(this.props.theme);
  }
  render() {
    return (
      <DocumentTitle title="Campus | Underbelly Creative">
        <section className="campus-container">
          <CampusHero theNeed={images.theNeed} hero={images.hero} />
          <Dubai dubai={images.dubai} />
          <UserExperience userExperience={images.userExperience} />
          <Features features={images.features} />
          <WebMobile webMobile={images.webMobile} />
          <Illustrations illustrations={images.illustrations} />
          <Development development={images.development} />
        </section>
      </DocumentTitle>
    );
  }
}

Campus.propTypes = {
  'name': React.PropTypes.string,
  'theme': React.PropTypes.string,
  'setNavTheme': React.PropTypes.func
};

Campus.defaultProps = {
  'name': 'campus',
  'theme': 'light'
};

export default Campus;
