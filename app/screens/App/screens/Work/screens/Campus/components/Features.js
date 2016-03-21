import React, { Component } from "react";
import Excerpt from "../shared/Excerpt";

class Features extends Component {
  render() {
    let img = require("../../../../../../../images/work/campus/features-iphone.png");
    return (
       <section className="features">
        <div className="features__item">
          <Excerpt
            title="FEATURES"
            position="left"
            excerpt={[
              "The primary goal of The Campus was to allow users quickly and effectively find, filter and compare schools. To accomplish this, we used a card concept for varying mobile sizes, as well as a table layout for tablet and web users. This allowed for the easiest interaction when comparing various elements, while avoiding and overwhelming user experience."
            ]}
          />
          <img className="features-img" src={img} alt=""/>
        </div>
       </section>
    )
  }
}

export default Features;
