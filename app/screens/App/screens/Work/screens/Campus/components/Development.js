import React, { Component } from 'react';
import Excerpt from '../shared/Excerpt';

class Development extends Component {
  render() {
    let { laptop } = this.props.development;
    return (
      <section className="development">
        <div>
          <img src={laptop} />
          <Excerpt
            title="DEVELOPMENT"
            excerpt={[
              'The fast paced life of a student requires current, easily accessible information, all the time. Campus events, activities, and resources are constantly changing. Not only this, but The Campus’ administrators have a ton of campuses, thus hundreds of events or activities to keep track of. This is why, when bringing The Campus to life, we were mindful to create an easy to manage CMS to accommodate the constantly changing content.',
              'To pull this off, we used a little gem called React on Rails. React on Rails allows the the administrative and front end to remain separate, while residing within the same ecosystem. This was done by building the administrative portion and API in Rails, then completing the front end in React. In doing so, we were able to utilize a few features like React Router and Redux. In the end, we have a quick, easy to update CMS that enables The Campus team to provide the most relevant information to their users.'
            ]}
          />
          <a href="#" className="btn">See It Live</a>
        </div>
      </section>
    );
  }
}

Development.propTypes = {
  'development': React.PropTypes.object.isRequired
};

export default Development;
