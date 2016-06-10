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
    this.props.setNavTheme(this.props.theme);
  }
  render() {
    return (
      <DocumentTitle title="Campus | Underbelly Creative">
        <section className="campus-container">
          <CampusHero theNeed={images.theNeed} hero={images.hero} viewportHeight={this.props.viewportHeight} />
          <Dubai dubai={images.dubai} viewportHeight={this.props.viewportHeight} />
          <UserExperience userExperience={images.userExperience} viewportHeight={this.props.viewportHeight} />
          <Features features={images.features} viewportHeight={this.props.viewportHeight} windowWidth={this.props.windowWidth} />
          <WebMobile webMobile={images.webMobile} viewportHeight={this.props.viewportHeight} pageYOffset={this.props.pageYOffset} />
          <Illustrations illustrations={images.illustrations} viewportHeight={this.props.viewportHeight} />
          <Development development={images.development} viewportHeight={this.props.viewportHeight} />
        </section>
      </DocumentTitle>
    );
  }
}

Campus.propTypes = {
  'name': React.PropTypes.string,
  'theme': React.PropTypes.string,
  'setNavTheme': React.PropTypes.func,
  'viewportHeight': React.PropTypes.number.isRequired,
  'windowWidth': React.PropTypes.number.isRequired,
  'pageYOffset': React.PropTypes.number.isRequired
};

Campus.defaultProps = {
  'name': 'campus',
  'theme': 'light'
};

export default Campus;
