import React, { Component } from "react";
import TagItem from "./TagItem";

class TagsContainer extends Component {
  render() {
    let { tags, context } = this.props;
    return (
      <div className="tags">
        {tags.map((tag, index) => (
          <TagItem key={index} title={tag} context={context} />
        ))}
      </div>
    )
  }
}

TagsContainer.propTypes = {
  tags: React.PropTypes.array.isRequired,
  context: React.PropTypes.string.isRequired
}

export default TagsContainer;
