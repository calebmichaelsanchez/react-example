import React, { Component } from 'react';
import axios from 'axios';
import DribbbleItems from './DribbbleItems';

class DribbbleContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'shots': []
    };
    this.handleShotRequest = this.handleShotRequest.bind(this);
  }
  componentDidMount() {
    this.handleShotRequest();
  }
  handleShotRequest() {
    axios.get('https://api.dribbble.com/v1/teams/underbelly/shots?access_token=6f39afb5fae5e2e0c5113e0097180061e77dd2d8e1eb7cbf5d4c66fa625dcea8')
      .then((response) => {
        let shots = response.data;
        this.setState({ 'shots': shots });
      });
  }
  render() {
    return (
      <section className="dribbble-shots">
        <h1>Work In Progress</h1>
        <DribbbleItems {...this.state} />
        <a href="https://dribbble.com/underbelly">Follow us on dribbble</a>
      </section>
    );
  }
}

export default DribbbleContainer;
