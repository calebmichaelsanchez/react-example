import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import Excerpt from '../shared/Excerpt';
import helpers from '../../../../../../../shared/util/helpers';

class Illustrations extends Component {
  constructor(props) {
    super(props);
    this.onScroll = this.onScroll.bind(this);
    this.onResize = this.onResize.bind(this);
    this.update = this.update.bind(this);
  }
  componentDidMount() {
    this.ticking           = false;
    this.element           = findDOMNode(this.refs.illustration);
    this.dimensions        = this.element.getBoundingClientRect();
    this.images            = document.querySelectorAll('.illustration-image__item');
    this.imagesArray       = [...this.images];
    this.viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    window.addEventListener('scroll', this.onScroll, false);
    window.addEventListener('resize', this.onResize, false);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll, false);
    window.removeEventListener('resize', this.onResize, false);
  }
  onScroll() {
    this.dimensions = this.element.getBoundingClientRect();
    if (!this.ticking) {
      window.requestAnimationFrame(this.update);
      this.ticking = true;
    }
  }
  onResize() {
    this.dimensions = this.element.getBoundingClientRect();
    this.viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    if (!this.ticking) {
      window.requestAnimationFrame(this.update);
      this.ticking = true;
    }
  }
  update() {
    let { position } = helpers;
    let items   = this.imagesArray;
    let height  = this.dimensions.height;
    let top     = this.dimensions.top;
    let context = (top - (this.viewportHeight - this.viewportHeight * 0.5)) * -1;
    let relativeY = context / height * 1.9;
    if (context >= 0) {
      items[0].style.opacity = position(1, -1, relativeY, 0);
      items[1].style.opacity = position(0, 1,  relativeY, 0);
    }
    this.ticking = false;
  }
  render() {
    let { sketch, illustration } = this.props.illustrations;
    return (
      <section className="illustrations">
        <Excerpt
          title="ILLUSTRATIONS"
          excerpt={[
            'The Campus has fun and inviting brand. With the launch of the app, we hoped to expand upon these characteristics to breathe even more life into the project. To do so, we illustrated custom UAE landscapes using The Campus’ brand colors. We then placed these themes throughout the app such as the login screen, 404 page, and filter pages.'
          ]}
        />
        <div ref="illustration" className="illustration-image">
          <div className="illustration-image__item illustration-image__item--one" ><img src={sketch} /></div>
          <div className="illustration-image__item illustration-image__item--two" ><img src={illustration} /></div>
        </div>
      </section>
    );
  }
}

Illustrations.propTypes = {
  'illustrations': React.PropTypes.object.isRequired
};

export default Illustrations;
