import React, { Component } from "react";

class Excerpt extends Component {
  render() {
    let { title, excerpt, position } = this.props;
    return (
      <div className={`excerpt excerpt--${position}`}>
        <h1 className="excerpt-title">{title}</h1>
        <div className="excerpt-content">
          {excerpt.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      </div>
    )
  }
}

Excerpt.propTypes = {
  title: React.PropTypes.string.isRequired,
  excerpt: React.PropTypes.array.isRequired,
  position: React.PropTypes.string
}
Excerpt.defaultProps = {
  position: "center"
}

export default Excerpt;
