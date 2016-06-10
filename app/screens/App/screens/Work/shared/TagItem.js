import React, { Component } from 'react';

class TagItem extends Component {
  render() {
    let { title } = this.props;
    return (
      <div className="tag">{title}</div>
    );
  }
}

TagItem.propTypes = {
  'title': React.PropTypes.string.isRequired
};

export default TagItem;
