import React, { Component } from "react";

class DribbbleItems extends Component {
  render() {
    let { shots } = this.props;
    let slicedShots = shots.slice(0, 4);
    return (
      <div className="shot-container">
        {slicedShots.map((shot) => {
          let style = { backgroundImage: "url(" + shot.images.hidpi + ")" }
          let link = shot.html_url;
          let title = shot.title;
          return (
            <a key={title} style={style} className="dribbble-item" href={link} target="_blank" >
              <div className="shot-title">{title}</div>
            </a>
          )
        })}
      </div>
    )
  }
}

export default DribbbleItems;
