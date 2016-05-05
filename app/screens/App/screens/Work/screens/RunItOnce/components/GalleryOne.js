import React, { Component } from 'react';

class GalleryOne extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let { gallery } = this.props;
    return (
      <section className="case-study-gallery">
        <div className="grid-1-2">
          <div className="intrinsic">
            <div className="intrinsic__inner intrinsic__inner--full">
              <div className="intrinsic__inner-magic" style={{backgroundImage: `url(${gallery.one})`}}></div>
            </div>
          </div>
        </div>
        <div className="grid-1-2">
          <div className="intrinsic">
            <div className="intrinsic__inner intrinsic__inner--half">
              <div className="intrinsic__inner-magic" style={{backgroundImage: `url(${gallery.two})`}}></div>
            </div>
          </div>
          <div className="intrinsic">
            <div className="intrinsic__inner intrinsic__inner--half">
              <div className="intrinsic__inner-magic" style={{backgroundImage: `url(${gallery.three})`}}></div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default GalleryOne;
