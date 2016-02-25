import React, { Component } from "react";
import { Link } from "react-router";

class SeeMore extends Component {
  render() {
    let { items } = this.props;
    return (
      <section className="see-more-container">
        <h1>You might also like</h1>
        {
          items.map((item) => {
            let style = { backgroundImage: "url(" + item.img + ")" }
            return (
              <Link key={item.url} to={`/making-it-awesome-with/${item.url}`} className="grid-1-4 see-more-item" style={style}>
                <div className="see-more-title">{item.title}</div>
              </Link>
            )
          })
        }
      </section>
    );
  }
}

SeeMore.propTypes = {
  items: React.PropTypes.array
}

export default SeeMore
