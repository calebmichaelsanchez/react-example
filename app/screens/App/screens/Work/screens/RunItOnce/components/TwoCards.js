import React, { Component } from 'react';
import classNames from 'classnames';

class TwoCards extends Component {
  constructor(props) {
    super(props);

    this.onLoad = this.onLoad.bind(this);

    this.state = { 'loaded': false };
  }
  componentDidMount() {
    let img = document.createElement('img');
    img.src = this.props.hero;
    img.onload = this.onLoad;
    this.src = img.src;
  }
  onLoad() {
    this.setState({ 'loaded': true });
  }
  render() {
    let loaded = classNames({ 'loaded': this.state.loaded });
    let style = { 'backgroundImage': `url(${this.src})` };
    return (
      <section style={style} className={`two-cards ${loaded}`}></section>
    );
  }
}

TwoCards.propTypes = {
  'hero': React.PropTypes.string.isRequired
};

export default TwoCards;
