import React, { Component } from "react";

class Dubai extends Component {
  render() {
    let svg = require("../../../../../../../images/work/campus/dubai/map-01.svg");
    return (
      <div className="dubai">
        <div className="dubai__inner" dangerouslySetInnerHTML={{ __html: svg }}></div>
      </div>
    )
  }
}

export default Dubai;
