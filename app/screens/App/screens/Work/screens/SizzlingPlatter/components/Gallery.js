import React, { Component } from 'react';

class Gallery extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {

  }
  componentWillUnmount() {

  }
  render() {
    return (
      <div className="ingredients-gallery">
        <img src={this.props.crsl} />
      </div>
    )
  }
}

export default Gallery;
