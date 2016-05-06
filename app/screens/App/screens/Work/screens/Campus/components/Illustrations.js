import React, { Component } from "react";
import ReactDOM, { findDOMNode } from "react-dom";
import Excerpt from "../shared/Excerpt";

class Illustrations extends Component {
  constructor(props) {
    super(props);
    this.onScroll = this.onScroll.bind(this);
    this.updateElements = this.updateElements.bind(this);
  }
  componentDidMount() {
    this.ticking = false;
    this.element = findDOMNode(this.refs.illustration);
    this.elementDimensions = {};
    window.addEventListener("scroll", this.onScroll, false);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll, false);
  }
  onScroll() {
    this.elementDimensions = this.element.getBoundingClientRect();
    if (!this.ticking) {
      window.requestAnimationFrame(this.updateElements);
      this.ticking = true;
    }
  }
  updateElements() {
    let { viewportHeight } = this.props,
        illustrationTop = this.elementDimensions.top,
        context = (illustrationTop - viewportHeight) * -1;

    (context >= viewportHeight / 2) ? this.element.classList.add("illustration--active") : this.element.classList.remove("illustration--active");

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
            "The Campus has fun a fun and inviting brand. With the launch of the app, we hoped to expand upon thes characteristics to breath even more life into the project. To do so, we illustrated custom UAE landscapes using The Campus’ brand colors. We then placed these themes throughout the app such as the login screen, 404 page, and filter pages."
          ]}
        />
        <div ref="illustration" className="illustration-image">
          <img className="illustration-image__item illustration-image__item--one" src={img.sketch} alt=""/>
          <img className="illustration-image__item illustration-image__item--two" src={img.illustration} alt=""/>
        </div>
      </section>
    )
  }
}

export default Illustrations;
