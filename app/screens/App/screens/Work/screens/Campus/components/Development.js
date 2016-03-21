import React, { Component } from "react";
import Excerpt from "../shared/Excerpt";

class Development extends Component {
  render() {
    let { title, excerpt } = this.props;
    let img = require("../../../../../../../images/work/campus/desktop.png");
    return (
      <section className="development">
        <img src={img} alt=""/>
        <Excerpt
          title="DEVELOPMENT"
          excerpt={[
            "In bringing The Campus to life, we had to be mindful of the need to keep information current and constatnly changing. Therefore, the need to edit or add content had to be simple and quick. To achieve these goals, we used React because of it’s easy……….Talk about the functions of the backend and how it helped to achieve all of the functions that the site needed to have to allow for the best user experience."
          ]}
        />
      </section>
    )
  }
}

export default Development;
