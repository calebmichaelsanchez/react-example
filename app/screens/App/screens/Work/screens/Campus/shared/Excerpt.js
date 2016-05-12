import React, { Component } from "react";

class Excerpt extends Component {
  render() {
    let { img, title, excerpt, position } = this.props;
    return (
      <div className={`excerpt excerpt--${position}`}>
        { (() => {
          if (img) {
            return (
              <div className="excerpt-intrinsic">
                <div className="excerpt-intrinsic__inner" dangerouslySetInnerHTML={{ __html: img }} />
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
