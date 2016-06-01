import React, { Component } from "react";
import TheNeed from "./TheNeed";

class CampusHero extends Component {
  constructor(props) {
    super(props);

    this.state = { loaded: false }
  }
  componentDidMount() {
    let img = document.createElement('img');
  }
  render() {
    return (
      <div className="campus-hero">
        <TheNeed theNeed={this.props.theNeed} />
      </div>
    )
  }
}

export default CampusHero;
