import React, { Component } from 'react';

class Hero extends Component {
  constructor(props) {
    super(props);

    this.onBgLoad = this.onBgLoad.bind(this);
    this.onImgLoad = this.onImgLoad.bind(this);

    this.state = {
      'loaded': false,
      'active': false
    };
  }
  componentDidMount() {
    let img = document.createElement('img');
    let { bg } = this.props.hero;
    img.src = bg;
    img.onload = this.onBgLoad;
    this.src = img.src;
  }
  onBgLoad() {
    this.setState({ 'loaded': true });
  }
  onImgLoad() {
    this.setState({ 'active': true });
  }
  render() {
    let style = { 'backgroundImage': `url(${this.src})` };
    let loaded = this.state.loaded ? 'hero--splat-loaded' : '';
    let active = this.state.active ? 'hero--splat-active' : '';
    let { hero } = this.props;
    return (
      <div className={`hero--splat ${loaded} ${active}`} ref="heroSplat">
        <div className="hero--splat-background" style={style} />
        <div className="hero--splat-logo">
          <div className="hero--splat-logo__inner"><img src={hero.logo} /></div>
        </div>
        <div className="hero--splat-container">
          <div className="hero--splat-container__item hero--splat-container__item--first"><img src={hero.one} /></div>
          <div className="hero--splat-container__item hero--splat-container__item--last" ><img src={hero.two} /></div>
          <div className="hero--splat-container__item hero--splat-container__item--last" ><img onLoad={this.onImgLoad} src={hero.three} /></div>
        </div>
      </div>
    );
  }
}

Hero.propTypes = {
  'hero': React.PropTypes.object.isRequired
};

export default Hero;
