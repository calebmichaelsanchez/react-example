import React, { Component } from "react";
import ReactDOM, { findDOMNode } from "react-dom";
import Excerpt from "../shared/Excerpt";
import helpers, { isInViewport } from "../../../../../../../shared/util/helpers";

class Illustrations extends Component {
  constructor(props) {
    super(props);
    this.onScroll = this.onScroll.bind(this);
  }
  componentDidMount() {
    window.addEventListener("scroll", this.onScroll, false);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll, false);
  }
  onScroll() {
    let elem = findDOMNode(this.refs.illustration);
    if (helpers.isInViewport(elem, 500)) {
      elem.classList.add("illustration--active");
    }
  }
  render() {
    let { title, excerpt } = this.props;
    let img = {
      sketch: require("../../../../../../../images/work/campus/sketch.jpg"),
      illustration: require("../../../../../../../images/work/campus/illustration.png")
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
