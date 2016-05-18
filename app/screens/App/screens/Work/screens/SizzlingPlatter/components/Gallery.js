import React, { Component } from 'react';

// use react-slick component for this carousel

class Gallery extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {

  }
  componentWillUnmount() {

  }
  render() {

      let { gallery } = this.props;
    return (
      <div className="ingredients-gallery">
        <img src={gallery.one} />
        <img src={gallery.two} />
        <img src={gallery.three} />
        <img src={gallery.four} />
      </div>
    )
  }
}

export default Gallery;
