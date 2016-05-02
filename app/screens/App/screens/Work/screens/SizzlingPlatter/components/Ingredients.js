import React, { Component } from 'react';

class Ingredients extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {

  }
  componentWillUnmount() {

  }
  render() {
    return (
      <div className="ingredients">
        <div className="ingredients-container">
          <div className="ingredients-container__item ingredients-copy">
            <h1>THE INGREDIENTS</h1>
            <p>The Underbelly team loves to incorporate custom photography whenever possible. We knew from day one we’d want to embark on a photoshoot for this project. We wanted crisp, clean photos taken at actual SPAT locations around the valley, not boring stock photos. Not only did get great shots on location, but we held an in-house photoshoot to get shots of ingredients like pepperoni, mushrooms, and even sprinkles! Pulling together high quality, custom photos allowed the best assets possible for our client and the site…nevermind the fact that it left us craving pizza and donuts every time we worked on the site.</p>
          </div>
        </div>
        <div className="ingredients-hero"></div>
      </div>
    )
  }
}

export default Ingredients;
