import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import Excerpt from '../shared/Excerpt';

class UserExperience extends Component {
  constructor(props) {
    super(props);
    this.animate = this.animate.bind(this);
    this.onScroll = this.onScroll.bind(this);
    this.onResize = this.onResize.bind(this);
    this.update = this.update.bind(this);
  }
  componentDidMount() {
    this.M = 1;
    this.eeze = window.Power2.easeIn;
    this.element = findDOMNode(this.refs.siteMap);
    this.dimensions = this.element.getBoundingClientRect();
    this.ticking = false;

    this.masterTimeline = new window.TimelineMax({
      'ease': this.eeze,
      'yoyo': false,
      'repeat': 0,
      'paused': true
    });

    window.MorphSVGPlugin.convertToPath('circle, rect, ellipse, line, polygon, polyline');

    // 1st Line
    this.line1Timeline = new window.TimelineMax({'ease':this.eeze});
    this.line1Timeline
      // Landing Page icon fades in
      .add(this.animate('#Landing_Page'))
      // this.Make line 1 root visible before it grows
      .set('#l1_c1', { 'opacity': 1 })
      // Line runs down from Landing page icon
      .to('#l1_c1', this.M * 0.25, { 'morphSVG': '#l1_c1_end' })
      // this.Make line 1 horiz root visible before it grows
      .set('#l1', { 'opacity': 1 })
      // add label before line grows horiz
      .to('#l1', this.M * 0.75, { 'morphSVG': '#l1_end' })
      .addLabel('l1Down')
      .to('#l1_c3', this.M * 0.15, { 'opacity': 1, 'morphSVG': '#l1_c3_end' }, 'l1Down')
      .to('#l1_c7', this.M * 0.25, { 'opacity': 1, 'morphSVG': '#l1_c7_end' }, 'l1Down')
      // Fade in CSR Blog icon
      .add(this.animate('#CSR_Blog'));

    this.line2Timeline = new window.TimelineMax({'ease':this.eeze});
    this.line2Timeline
      // Run all the child lines down from line1 (c2, c3, c4, etc.) and fade in the icons
      .to('#l1_c2', this.M * 0.15, { 'opacity': 1, 'morphSVG': '#l1_c2_end' })
      .add(this.animate('#SI_Label'))
      // Fade in Filter icon
      .set('#l3_horiz', { 'opacity': 1 })
      .to('#l3_horiz', this.M * 0.30, { 'morphSVG': '#l3_horiz_end' })
      .to('#l3_c1', this.M * 0.15, { 'opacity': 1, 'morphSVG': '#l3_c1_end' })
      .add(this.animate('#Calendar'))
      .set('#l3_c5', { 'opacity': 1 })
      .to('#l3_c2', this.M * 0.15, { 'opacity': 1, 'morphSVG': '#l3_c2_end' })
      .add(this.animate('#Discounts'))
      .set('#l3_c6', { 'opacity': 1 })
      .to('#l3_c3', this.M * 0.15, { 'opacity': 1, 'morphSVG': '#l3_c3_end' })
      .add(this.animate('#Businesses'))
      .to('#l3_c4', this.M * 0.15, { 'opacity': 1, 'morphSVG': '#l3_c4_end' })
      .set('#l3_c7', { 'opacity': 1 })
      .add(this.animate('#Exams'));


    // Student Info branches
    this.line3Timeline = new window.TimelineMax({'ease':this.eeze});
    this.line3Timeline
      .add(this.animate('#Filter'))
      .to('#l1_c3b', this.M * 0.25, { 'opacity': 1, 'morphSVG': '#l1_c3b_end' })
      // Fade in Search Results icon
      .add(this.animate('#Search_Results'))
      // Lines that are running down from Filters and Search Results simultaneously
      .addLabel('l3Down')
      .to('#l2_c1', this.M * 0.25, { 'opacity': 1, 'morphSVG': '#l2_c1_end' }, 'l3Down')
      .to('#l2_c2', this.M * 0.25, { 'opacity': 1, 'morphSVG': '#l2_c2_end' }, 'l3Down')
      .to('#l2_c1_horiz', this.M * 0.35, { 'opacity': 1, 'morphSVG': '#l2_c1_horiz_end' }, 'l3Down+=0.25')
      .to('#l2_c2_horiz', this.M * 0.35, { 'opacity': 1, 'morphSVG': '#l2_c2_horiz_end' }, 'l3Down+=0.25')
      .to('#l2_c3', this.M * 0.25, { 'opacity': 1, 'morphSVG': '#l2_c3_end' })
      .to('#l2_c3_horiz', this.M * 0.25, { 'opacity': 1, 'morphSVG': '#l2_c3_horiz_end' })
      .addLabel('l3Down2')
      .to('#l2_c4', this.M * 0.25, { 'opacity': 1, 'morphSVG': '#l2_c4_end' }, 'l3Down2')
      .to('#l2_c5', this.M * 0.25, { 'opacity': 1, 'morphSVG': '#l2_c5_end' }, 'l3Down2')
      .add(this.animate('#School_Detail'), 'l3Down2+=0.35')
      .add(this.animate('#Comparison'), 'l3Down2+=0.35');


    this.line4Timeline = new window.TimelineMax({'ease':this.eeze});
    this.line4Timeline
      .addLabel('l4Down')
      .to('#l1_c4', this.M * 0.15, { 'opacity': 1, 'morphSVG': '#l1_c4_end' })
      .add(this.animate('#Student_Services'))
      .to('#l1_c5', this.M * 0.15, { 'opacity': 1, 'morphSVG': '#l1_c5_end' })
      .add(this.animate('#Contact'))
      .to('#l1_c6', this.M * 0.15, { 'opacity': 1, 'morphSVG': '#l1_c6_end' })
      .add(this.animate('#Terms'))

      .set('#l1_c8', { 'opacity': 1 })
      .add(this.animate('#Form_Success_-_Student_Services'))
      .set('#l1_c9', { 'opacity': 1 })
      .add(this.animate('#Form_Success_-_Contact'));

    this.line5Timeline = new window.TimelineMax({'ease':this.eeze});
    this.line5Timeline
        .to('#l5_c1', this.M * 0.15, { 'opacity': 1, 'morphSVG': '#l5_c1_end' })
        .to('#l5_c2', this.M * 0.25, { 'opacity': 1, 'morphSVG': '#l5_c2_end' })
        .to('#l5_c3', this.M * 0.25, { 'opacity': 1, 'morphSVG': '#l5_c3_end' })
        .to('#l5_c4', this.M * 0.15, { 'opacity': 1, 'morphSVG': '#l5_c4_end' })
        .to('#l5_c5', this.M * 0.5, { 'opacity': 1, 'morphSVG': '#l5_c5_end' })
        .to('#l5_c6', this.M * 0.15, { 'opacity': 1, 'morphSVG': '#l5_c6_end' }, 'l5fadeIn')
        .to('#l5_c7', this.M * 0.15, { 'opacity': 1, 'morphSVG': '#l5_c7_end' }, 'l5fadeIn')
        .add(this.animate('#Student_Requesting_Service_Ux'), 'l5fadeIn+=0.15')
        .add(this.animate('#Student_Service_Provider_UX'), 'l5fadeIn+=0.15')
        .to('#l5_c8', this.M * 0.15, { 'opacity': 1, 'morphSVG': '#l5_c8_end' })
        .add(this.animate('#Student_Services_Payment'))
        .to('#l5_c9', this.M * 0.15, { 'opacity': 1, 'morphSVG': '#l5_c9_end' })
        .add(this.animate('#Student_Service_Provider_Payment'));

    this.line6Timeline = new window.TimelineMax({'ease':this.eeze});
    this.line6Timeline
        .to('#l6_c1', this.M * 0.5, { 'opacity': 1, 'morphSVG': '#l6_c1_end' })
        .to('#l6_c2', this.M * 0.5, { 'opacity': 1, 'morphSVG': '#l6_c2_end' })
        .add(this.animate('#Business_Sponsorship_Payment'));

    this.masterTimeline
      .add(this.line1Timeline)
      .add(this.line3Timeline, this.M * 1.55)
      .add(this.line2Timeline, this.M * 2)
      .add(this.line4Timeline, this.M * 2)
      .add(this.line5Timeline, this.M * 3.5)
      .add(this.line6Timeline, this.M * 3.5);

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

    if (context >= viewportHeight * .2) {
      this.masterTimeline.resume();
    }
    this.ticking = false;
  }
  animate(element) {
    let modTitle = document.querySelectorAll('g.mod-title');
    modTitle = [].slice.call(modTitle);
    let tl = new window.TimelineMax();
    tl.to(element, this.M * 0.15, { 'opacity': 1 }, 'fadeIn').to(modTitle, this.M * 0.15, { 'opacity': 1 }, 'fadeIn+=0.10');
    return tl;
  }
  render() {
    let siteMap = require('../../../../../../../images/work/campus/user-experience/site-map-animation-final.svg');
    return (
      <section className="user-experience">
        <Excerpt
          title="USER EXPERIENCE"
          excerpt={[
            'For The Campus, understanding user flows were essential for building a successful app and clean functionality was imperative. We spent the first part of the project identifying what information would be most sought-after for students, as well as how they might interact with the app. In our research we attempted to understand the process of identifying the most important factors incoming students may research when determining which schools to pursue.'
          ]}
          viewportHeight={this.props.viewportHeight}
        />
        <div ref="siteMap" className="site-map" dangerouslySetInnerHTML={{ '__html': siteMap }}></div>
      </section>
    );
  }
}

UserExperience.propTypes = {
  'viewportHeight': React.PropTypes.number.isRequired
};

export default UserExperience;
