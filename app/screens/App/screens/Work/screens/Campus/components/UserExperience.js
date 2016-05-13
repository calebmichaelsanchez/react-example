import React, { Component } from "react";
import Excerpt from "../shared/Excerpt";

class UserExperience extends Component {
  render() {
    let siteMap = require("../../../../../../../images/work/campus/user-experience/site-map-01.svg");
    return (
      <section className="user-experience">
        <Excerpt
          title="USER EXPERIENCE"
          excerpt={[
            "For The Campus, understanding user flows were essential for building a successful app and clean functionality was imperative. We spent the first part of the project identifying what information would be most sought-after for students, as well as how they might interact with the app. In our research we attempted to understand the process of identifying the most important factors incoming students may research when determining which schools to pursue."
          ]}
        />
        <div className="site-map" dangerouslySetInnerHTML={{ __html: siteMap }}></div>
      </section>
    )
  }
}

export default UserExperience;
