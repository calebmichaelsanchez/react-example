import React, { Component } from 'react';

class Dubai extends Component {
  render() {
    let { svg } = this.props.dubai;
    return (
      <div className="dubai">
        <div className="dubai__inner"><img src={svg} /></div>
      </div>
    );
  }
}

Dubai.propTypes = {
  'dubai': React.PropTypes.object.isRequired
};

export default Dubai;
