import React, { Component } from 'react';
import TagItem from './TagItem';

class TagsContainer extends Component {
  render() {
    let { tags, context } = this.props;
    return (
      <div className={`tags tags--${context}`}>
        {tags.map((tag, index) =>
          <TagItem key={index} title={tag} />
        )}
      </div>
    );
  }
}

TagsContainer.propTypes = {
  'tags': React.PropTypes.array.isRequired,
  'context': React.PropTypes.string.isRequired
};

export default TagsContainer;
