import React, { Component } from 'react';

class Hero extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {

  }
  componentWillUnmount() {

  }
  render() {
    let { hero } = this.props;
    return (
      <div className="hero--splat" ref="heroSplat">
        <div className="hero--splat-container">
          <img className="hero--splat-container__item" src={hero.one} />
          <img className="hero--splat-container__item" src={hero.two} />
          <img className="hero--splat-container__item" src={hero.three} />
        </div>
      </div>
    )
  }
}

export default Hero;
