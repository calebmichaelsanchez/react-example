import React, { Component } from "react";
import ReactDom, { findDOMNode } from "react-dom";

class Excerpt extends Component {
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

    window.addEventListener("scroll", this.onScroll, false);
    window.addEventListener("resize", this.onResize, false);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll, false);
    window.removeEventListener("resize", this.onResize, false);
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
    let { viewportHeight } = this.props,
        top = this.dimensions.top,
        context = (top - viewportHeight) * -1;

    if (context >= viewportHeight * .1) {
      this.element.classList.add("excerpt--fadeInUp");
    } else {
      this.element.classList.remove("excerpt--fadeInUp");
    }
    this.ticking = false;
  }
  render() {
    let { img, title, excerpt, position } = this.props;
    return (
      <div ref="element" className={`excerpt excerpt--${position}`}>
        { (() => {
          if (img) {
            return (
              <div className="excerpt-intrinsic">
                <div className="excerpt-intrinsic__inner"><img src={img} /></div>
              </div>
            )
          } else {
            return (<h2 className="excerpt-title">{title}</h2>)
          }
        })()}
        <div className="excerpt-content">
          {excerpt.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      </div>
    )
  }
  renderTitle() {

  }
}

Excerpt.propTypes = {
  img: React.PropTypes.string,
  title: React.PropTypes.string,
  excerpt: React.PropTypes.array.isRequired,
  position: React.PropTypes.string
}
Excerpt.defaultProps = {
  position: "center"
}

export default Excerpt;
