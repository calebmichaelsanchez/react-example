import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import CampusHero from "./components/Hero";
import Dubai from "./components/Dubai";
import TheNeed from "./components/TheNeed";
import UserExperience from "./components/UserExperience";
import Features from "./components/Features";
import WebMobile from "./components/WebMobile";
import Illustrations from "./components/Illustrations";
import Development from "./components/Development";

class Campus extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    ga('send', 'pageview', '/making-it-awesome-with/aiga');
    this.props.setNavTheme(this.props.theme);
  }
  render() {
    return (
      <DocumentTitle title="Campus | Underbelly Creative">
        <section className="campus-container">
          <CampusHero />
          <Dubai />
          <UserExperience />
          <Features viewportHeight={this.props.viewportHeight} windowWidth={this.props.windowWidth} />
          <WebMobile viewportHeight={this.props.viewportHeight} pageYOffset={this.props.pageYOffset} />
          <Illustrations viewportHeight={this.props.viewportHeight} />
          <Development />
        </section>
      </DocumentTitle>
    )
  }
}

Campus.propTypes = {
  name: React.PropTypes.string,
  theme: React.PropTypes.string,
  setNavTheme: React.PropTypes.func
};
Campus.defaultProps = {
  name: 'campus',
  theme: 'light'
};

export default Campus;
