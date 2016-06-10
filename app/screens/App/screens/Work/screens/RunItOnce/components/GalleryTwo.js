import React, { Component } from 'react';

class GalleryTwo extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let { gallery2 } = this.props;
    return (
      <section className="case-study-gallery2">
        <div className="grid-1-3">
          <div className="intrinsic">
            <div className="intrinsic__inner intrinsic__inner--full">
              <div className="intrinsic__inner-magic" style={{'backgroundImage': `url(${gallery2.one})`}}></div>
            </div>
          </div>
        </div>
        <div className="grid-1-3">
          <div className="intrinsic">
            <div className="intrinsic__inner intrinsic__inner--full">
              <div className="intrinsic__inner-magic" style={{'backgroundImage': `url(${gallery2.two})`}}></div>
            </div>
          </div>
        </div>
        <div className="grid-1-3">
          <div className="intrinsic">
            <div className="intrinsic__inner intrinsic__inner--full">
              <div className="intrinsic__inner-magic" style={{'backgroundImage': `url(${gallery2.three})`}}></div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

GalleryTwo.propTypes = {
  'gallery2': React.PropTypes.object.isRequired
};

export default GalleryTwo;
