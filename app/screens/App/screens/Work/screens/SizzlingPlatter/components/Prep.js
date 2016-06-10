import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import TagsContainer from '../../../shared/TagsContainer';


class Prep extends Component {
  constructor(props) {
    super(props);

    this.onScroll = this.onScroll.bind(this);
    this.onResize = this.onResize.bind(this);
    this.update   = this.update.bind(this);
  }
  componentDidMount() {
    this.ticking = false;
    this.element = findDOMNode(this.refs.element);
    this.dimensions = this.element.getBoundingClientRect();

    this.update();

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
      window.requestAnimFrame(this.update);
      this.ticking = true;
    }
  }
  onResize() {
    this.dimensions = this.element.getBoundingClientRect();
    if (!this.ticking) {
      window.requestAnimFrame(this.update);
      this.ticking = true;
    }
  }
  update() {
    let { viewportHeight } = this.props;
    let top = this.dimensions.top;
    let context = (top - viewportHeight) * -1;

    if (context >= viewportHeight * 0.1) {
      this.element.classList.add('fadeInUp--active');
    } else {
      this.element.classList.remove('fadeInUp--active');
    }
    this.ticking = false;
  }
  render() {
    return (
      <div className="prep">
        <div className="prep-container">
          <div ref="element" className="fadeInUp prep-container__item">
            <h1>Preparation</h1>
            <p>Sizzling Platter is a conglomerate of several restaurant chains in the great Salt Lake Valley which includes Dunkin’ Donuts, Red Robin, Little Caesars, and Sizzler. The SPLAT team approached Underbelly with the goal of overhauling its corporate website.  Upon initial discussion, it was determined the priorities would be to improve interaction of prospective employees, better illustrate company culture, and share the SPLAT story in a more engaging light.</p>
            <p>The goal for the site was also to simplify the flow of the site so users could easily find pertinent information, whether its contact information or employment opportunities. Additionally, Sizzling Platter wanted to be able to showcase all the current brands, as well as others acquired down the road.</p>
            <TagsContainer context="splat" tags={['Web Design', 'Photography', 'Development']} />
          </div>
        </div>
      </div>
    );
  }
}

Prep.propTypes = {
  'viewportHeight': React.PropTypes.number.isRequired
};

export default Prep;
