import React, { Component } from "react";

class TagItem extends Component {
  render() {
    let { title } = this.props;
    return (
      <div className="tag">{title}</div>
    )
  }
}

export default TagItem;
