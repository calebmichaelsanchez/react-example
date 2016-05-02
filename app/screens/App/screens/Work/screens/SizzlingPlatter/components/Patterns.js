import React, { Component } from 'react';

class Patterns extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {

  }
  componentWillUnmount() {

  }
  render() {
    let { patterns } = this.props;
    return (
      <div className="patterns" ref="patterns">
        <div className="patterns-container">
          <h1>COLORS</h1>
          <img className="patterns-container__item" src={patterns.swatches} />
          <h1>LATO LIGHT</h1>
          <p>A B C D E F G H I J K L M N O <br/>
          P Q R S T U V W X Y Z <br/>
          0 1 2 3 4 5 6 7 8 9</p>
        </div>
        <img className="patterns__item" src={patterns.peppers} />
        <img className="patterns__item" src={patterns.pepperonis} />
        <img className="patterns__item" src={patterns.sprinkles} />
      </div>
    )
  }
}

export default Patterns;
