import React, { Component } from "react";

class TagItem extends Component {
  render() {
    let { title, context } = this.props;
    return (
      <div className={`tag tag--${context}`}>{title}</div>
    )
  }
}

export default TagItem;
