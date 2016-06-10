import React, { Component } from 'react';

class PhoneSlide extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {

  }
  componentWillUnmount() {

  }
  handleClick(event) {
    event.preventDefault();
    this.props.onClick(this.props.index);
  }
  render() {
    let { img, type, index, slideIndex } = this.props;
    let active = slideIndex === index ? 'active' : '';

    if (type === 'background') {
      return (
        <li className={`background__list-item background__list-item--${active}`} onClick={this.handleClick}>
          <img src={img} />
        </li>
      );
    } else if (type === 'screen') {
      return (
        <li className="screen__list-item">
          <img src={img} />
        </li>
      );
    }
    return <div></div>;
  }
}

PhoneSlide.propTypes = {
  'onClick': React.PropTypes.func.isRequired,
  'index': React.PropTypes.number.isRequired,
  'img': React.PropTypes.string.isRequired,
  'type': React.PropTypes.string.isRequired,
  'slideIndex': React.PropTypes.number.isRequired
};

export default PhoneSlide;
