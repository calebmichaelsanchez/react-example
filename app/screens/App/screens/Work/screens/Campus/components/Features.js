import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import Excerpt from '../shared/Excerpt';
import classNames from 'classnames';

class Features extends Component {
  constructor(props) {
    super(props);

    this.onScroll = this.onScroll.bind(this);
    this.onResize = this.onResize.bind(this);
    this.update   = this.update.bind(this);
    this.isTouch  = this.isTouch.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      'touch': null,
      'isPlaying': false
    };
  }
  componentDidMount() {
    this.isTouch();

    this.ticking    = false;
    this.element    = findDOMNode(this.refs.video);
    this.video      = document.querySelector('video');
    this.viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    this.dimensions = this.element.getBoundingClientRect();

    window.addEventListener('scroll', this.onScroll, false);
    window.addEventListener('resize', this.onResize, false);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll, false);
    window.removeEventListener('resize', this.onResize, false);
  }
  isTouch() {
    let html = document.documentElement;
    if (html.classList.contains('no-touchevents')) {
      this.setState({ 'touch': false });
    } else {
      this.setState({ 'touch': true });
    }
  }
  onScroll() {
    this.dimensions = this.element.getBoundingClientRect();
    if (!this.ticking) {
      window.requestAnimationFrame(this.update);
      this.ticking = true;
    }
  }
  onResize() {
    this.dimensions = this.element.getBoundingClientRect();
    this.viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    if (!this.ticking) {
      window.requestAnimationFrame(this.update);
      this.ticking = true;
    }
  }
  handleClick() {
    let { touch, isPlaying } = this.state;
    if (touch && !isPlaying) {
      this.video.play();
      this.setState({ 'isPlaying': true });
    } else if (touch && isPlaying) {
      this.video.currentTime = 0;
      this.video.play();
    }
  }
  update() {
    let top     = this.dimensions.top;
    let bottom  = this.dimensions.bottom;
    let context = (top - this.viewportHeight) * -1;

    if (context >= this.viewportHeight * 0.25 && bottom >= this.viewportHeight * 0.6 && !this.state.touch) {
      this.video.play();
    } else if (context <= 0 || bottom <= 0 && !this.state.touch) {
      this.video.pause();
      this.video.currentTime = 0;
    }
    this.ticking = false;
  }
  render() {
    let isPlaying = classNames({ 'playing': this.state.isPlaying });
    let { device, screen, video } = this.props.features;
    return (
       <section className="features">
        <div className="features__item">
          <Excerpt
            title="FEATURES"
            position="left"
            excerpt={[
              'The primary goal of The Campus was to allow users to quickly and effectively find, filter, and compare schools. To accomplish this, we used a card concept for varying mobile sizes, as well as a table layout for tablet and web users. This allowed for the easiest interaction when comparing various elements, while avoiding an overwhelming user experience.'
            ]}
          />
          <div className="features-img">
            <img src={device} alt="iPhone 6"/>
            <div ref="video" className={`phone-video ${isPlaying}`} onClick={this.handleClick}>
              <div className="phone-video__inner">
                <video poster={screen}>
                  <source src={video.one} />
                  <source src={video.two} />
                  <source src={video.three} />
                </video>
              </div>
            </div>
          </div>
        </div>
       </section>
    );
  }
}

Features.propTypes = {
  'features': React.PropTypes.object.isRequired
};

export default Features;
