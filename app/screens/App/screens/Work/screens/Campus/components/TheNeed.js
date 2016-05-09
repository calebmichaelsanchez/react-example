import React, { Component } from "react";
import Excerpt from "../shared/Excerpt";
import TagsContainer from "../../../shared/TagsContainer";

class TheNeed extends Component {
  render() {
    return (
      <section className="the-need">
        <Excerpt
          title="THE NEED"
          excerpt={[
            "The United Arab Emirates (UAE) is roughly the size of South Carolina at 32,000 square miles and a GDP ranked 32nd in the world. Within this bustling country are over 200 colleges and universities. Aside from water, the UAE doesn’t seem to lack much…except a comprehensive service for filtering through the campus events and information nationwide!",
            "Enter 'The Campus'. The Campus connects students in the UAE with campus services across the country. The Underbelly team was intrigued when The Campus team approached us with their desire to create an app allowing students to easily search and compare information from universities such as tuition rates, events, and student discounts."
          ]}
        />
        <TagsContainer
          context="campus"
          tags={[
            "Web Design",
            "User Experience",
            "Development",
            "Illustration"
          ]}
        />
      </section>
    )
  }
}

export default TheNeed;
