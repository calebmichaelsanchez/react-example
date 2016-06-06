import React, { Component } from "react";
import { Link } from "react-router";

class SeeMore extends Component {
  render() {
    let { items } = this.props;
    return (
      <div className="see-more">
        <div className="see-more__title">You might also like</div>
        {
          items.map((item) => {
            let style = { backgroundImage: "url(" + item.img + ")" }
            return (
              <Link key={item.url} to={`/making-it-awesome-with/${item.url}`} className="grid-1-4 see-more__item" style={style}>
                <div className="see-more__item-title">{item.title}</div>
              </Link>
            )
          })
        }
      </div>
    );
  }
}

SeeMore.propTypes = {
  items: React.PropTypes.array
}

export default SeeMore
