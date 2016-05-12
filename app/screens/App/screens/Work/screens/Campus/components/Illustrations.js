import React, { Component } from "react";
import ReactDOM, { findDOMNode } from "react-dom";
import Excerpt from "../shared/Excerpt";

class Illustrations extends Component {
  constructor(props) {
    super(props);
    this.onScroll = this.onScroll.bind(this);
    this.update = this.update.bind(this);
  }
  componentDidMount() {
    this.ticking = false;
    this.element = findDOMNode(this.refs.illustration);
    this.height = this.element.clientHeight;
    this.elementDimensions = {};
    // window.addEventListener("scroll", this.onScroll, false);
  }
  componentWillUnmount() {
    // window.removeEventListener("scroll", this.onScroll, false);
  }
  onScroll() {
    this.elementDimensions = this.element.getBoundingClientRect();
    if (!this.ticking) {
      window.requestAnimationFrame(this.update);
      this.ticking = true;
    }
  }
  update() {
    let { viewportHeight } = this.props,
        height  = this.height,
        top     = this.elementDimensions.top,
        context = (top - viewportHeight) * -1;
    console.log("top", top);
    console.log("height", height);
    //(context >= viewportHeight / 1.5) ? this.element.classList.add("illustration--active") : this.element.classList.remove("illustration--active");
    (top <= 0 && (top * -1) <= height / 2) ? this.element.classList.add("illustration--active") : this.element.classList.remove("illustration--active");
    this.ticking = false;
  }
  render() {
    let img = {
      sketch: require("../../../../../../../images/work/campus/illustration/sketch.png"),
      illustration: require("../../../../../../../images/work/campus/illustration/illustration.png")
    }
    return (
      <section className="illustrations">
        <Excerpt
          title="ILLUSTRATIONS"
          excerpt={[
            "The Campus has fun and inviting brand. With the launch of the app, we hoped to expand upon these characteristics to breathe even more life into the project. To do so, we illustrated custom UAE landscapes using The Campus’ brand colors. We then placed these themes throughout the app such as the login screen, 404 page, and filter pages."
          ]}
        />
        <div ref="illustration" className="illustration-image">
          <div className="illustration-intrinsic">
            <div className="illustration-intrinsic__inner">
              <div className="illustration-intrinsic__magic" style={{backgroundImage: `url(${img.sketch})`}}></div>
            </div>
          </div>
          <div className="illustration-intrinsic">
            <div className="illustration-intrinsic__inner">
              <div className="illustration-intrinsic__magic" style={{backgroundImage: `url(${img.illustration})`}}></div>
            </div>
          </div>
        {/*
          <div className="illustration-image__item illustration-image__item--one" />
          <div className="illustration-image__item illustration-image__item--two" />
        */}
        </div>
      </section>
    )
  }
}

export default Illustrations;
