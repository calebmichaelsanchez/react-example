import React, { Component } from "react";
import ReactDOM, { findDOMNode } from "react-dom";
import Excerpt from "../shared/Excerpt";

class Features extends Component {
  constructor(props) {
    super(props);

    this.onScroll = this.onScroll.bind(this);
    this.onResize = this.onResize.bind(this);
    this.update   = this.update.bind(this);
    this.isTouch  = this.isTouch.bind(this);

    this.state = {
      touch: null
    }
  }
  componentDidMount() {
    this.isTouch();

    this.ticking    = false;
    this.element    = findDOMNode(this.refs.video);
    this.video      = document.querySelector("video");
    this.dimensions = {};

    window.addEventListener("scroll", this.onScroll, false);
    window.addEventListener("resize", this.onResize, false);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll, false);
    window.removeEventListener("resize", this.onResize, false);
  }
  isTouch() {
    let html = document.querySelector("html");
    if (html.classList.contains("no-touchevents")) {
      this.setState({ touch: false });
    } else {
      this.setState({ touch: true });
    }
  }
  onScroll() {
    this.dimensions = this.element.getBoundingClientRect();
    window.requestAnimFrame(this.update);
  }
  onResize() {
    this.dimensions = this.element.getBoundingClientRect();
    window.requestAnimFrame(this.update);
  }
  update() {
    let { viewportHeight, windowWidth } = this.props,
        top     = this.dimensions.top,
        bottom  = this.dimensions.bottom,
        context = (top - viewportHeight) * -1;

    if (context >= viewportHeight * .25 && bottom >= viewportHeight * .6 && !this.state.touch) {
      this.video.play();
    } else if (context <= 0 || bottom <= 0 && !this.state.touch) {
      this.video.pause();
      this.video.currentTime = 0;
    }
  }
  render() {
    let img = require("../../../../../../../images/work/campus/features/device.png"),
        screen = require("../../../../../../../images/work/campus/features/screen.jpg"),
        video = {
          one: require("../../../../../../../images/work/campus/features/video.mp4"),
          two: require("../../../../../../../images/work/campus/features/video.ogv"),
          three: require("../../../../../../../images/work/campus/features/video.webm")
        };
    return (
       <section className="features">
        <div className="features__item">
          <Excerpt
            title="FEATURES"
            position="left"
            excerpt={[
              "The primary goal of The Campus was to allow users to quickly and effectively find, filter, and compare schools. To accomplish this, we used a card concept for varying mobile sizes, as well as a table layout for tablet and web users. This allowed for the easiest interaction when comparing various elements, while avoiding an overwhelming user experience."
            ]}
          />
          <div className="features-img">
            <img src={img} alt="iPhone 6"/>
            <div ref="video" className="video">
              <div className="video__inner">
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
    )
  }
}

export default Features;
