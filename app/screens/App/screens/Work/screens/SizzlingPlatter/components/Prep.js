import React, { Component } from 'react';
import ReactDom, { findDOMNode } from 'react-dom';
import TagsContainer from "../../../shared/TagsContainer";


class Prep extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.ticking = false;
    this.element = findDOMNode(this.refs.prep);
  }
  componentWillUnmount() {

  }
  render() {
    return (
      <div className="prep" ref="prep">
        <div className="prep-container">
          <div className="prep-container__item prep-copy">
            <h1>PREPARATION</h1>
            <p>Sizzling Platter is a conglomerate of several restaurant chains in the great Salt Lake Valley which includes Dunkin’ Donuts, Red Robin, Little Caesars, and Sizzler. The SPLAT team approached Underbelly with the goal of overhauling its corporate website.  Upon initial discussion, it was determined the priorities would be to improve interaction of prospective employees, better illustrate company culture, and share the SPLAT story in a more engaging light.</p>
            <p>The goal for the site was also to simplify the flow of the site so users could easily find pertinent information, whether its contact information or employment opportunities. Additionally, Sizzling Platter wanted to be able to showcase all the current brands, as well as others acquired down the road.</p>
          </div>
          <TagsContainer
          context="splat"
          tags={[
            "Web Design",
            "Photography",
            "Development"
          ]}
        />
        </div>
      </div>
    )
  }
}

export default Prep;
