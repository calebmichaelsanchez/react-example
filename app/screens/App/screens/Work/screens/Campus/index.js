import React, { Component } from 'react';
import Hero from "./components/Hero";
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
      <section className="campus-container">
        <Hero />
        <UserExperience />
        <Features />
        <WebMobile />
        <Illustrations />
        <Development />
      </section>
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
  theme: 'dark'
};

export default Campus;
