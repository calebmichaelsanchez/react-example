import React, { Component } from 'react';
import TheNeed from './TheNeed';

class CampusHero extends Component {
  constructor(props) {
    super(props);

    this.onBgLoad = this.onBgLoad.bind(this);

    this.state = { 'loaded': false };
  }
  componentDidMount() {
    let img = document.createElement('img');
    img.src = this.props.hero;
    img.onload = this.onBgLoad;
    this.src = img.src;
  }
  onBgLoad() {
    this.setState({ 'loaded': true });
  }
  render() {
    let style = { 'backgroundImage': `url(${this.src})`};
    let loaded = this.state.loaded ? 'campus-hero--loaded' : '';
    return (
      <div className={`campus-hero ${loaded}`} style={style}>
        <TheNeed theNeed={this.props.theNeed} />
      </div>
    );
  }
}

CampusHero.propTypes = {
  'hero': React.PropTypes.string.isRequired,
  'theNeed': React.PropTypes.object.isRequired
};

export default CampusHero;
