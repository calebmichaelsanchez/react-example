import React, { Component } from 'react';
import PhoneSlider from '../../shared/PhoneSlider';
import { backgroundImagesArray, screenImagesArray, phoneImg } from './Data';

class Playground extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {

  }
  componentWillUnmount() {

  }
  render() {
    return (
      <section className="playground">
        <PhoneSlider backgroundImages={backgroundImagesArray} screenImages={screenImagesArray} phone={phoneImg} />
      </section>
    )
  }
}

export default Playground;
