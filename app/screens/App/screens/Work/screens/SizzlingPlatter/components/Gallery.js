import React, { Component } from 'react';

class Gallery extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let { gallery } = this.props;

    return (
      <div className="ingredients-gallery">
        {gallery.map((item, index) =>
          <div key={index} className="ingredients-gallery__item">
            <div className="ingredients-gallery__item-inner" style={{'backgroundImage': `url(${item})`}}></div>
          </div>
        )}
      </div>
    );
  }
}

Gallery.propTypes = {
  'gallery': React.PropTypes.array.isRequired
};

export default Gallery;
