import React, { Component } from 'react';
import ReactDOM, { findDOMNode } from 'react-dom';
import helpers from '../../../../../shared/util/helpers';
import PhoneSlide from './PhoneSlide';

class PhoneSlider extends Component {
  constructor(props) {
    super(props);

    this.initializeSlider = this.initializeSlider.bind(this);
    this.goTo             = this.goTo.bind(this);
    this.handleGesture    = this.handleGesture.bind(this);
    this.handleTouchstart = this.handleTouchstart.bind(this);
    this.handleTouchend   = this.handleTouchend.bind(this);

    this.state = { slideIndex: 1 }
  }
  componentDidMount() {
    this.initializeSlider();

    this.screen = findDOMNode(this.refs.screen);
    this.touchstartX = 0;
    this.touchstartY = 0;
    this.touchendX   = 0;
    this.touchendY   = 0;

    this.screen.addEventListener('touchstart', this.handleTouchstart, false);
    this.screen.addEventListener('touchend', this.handleTouchend, false);
  }
  componentWillUnmount() {
    this.screen.removeEventListener('touchstart', this.handleTouchstart, false);
    this.screen.removeEventListener('touchend', this.handleTouchend, false);
  }
  handleTouchstart(event) {
    this.touchstartX = event.touches[0].screenX;
    this.touchstartY = event.touches[0].screenY;
  }
  handleTouchend(event) {
    this.touchendX = event.changedTouches[0].screenX;
    this.touchendY = event.changedTouches[0].screenY;
    this.handleGesture();
  }
  handleGesture() {
    if (this.touchendX < this.touchstartX && Math.abs(this.touchstartX - this.touchendX) >= 75) {
      this.goTo(this.state.slideIndex + 1);
    }
    if (this.touchendX > this.touchstartX && Math.abs(this.touchendX - this.touchstartX) >= 75) {
      this.goTo(this.state.slideIndex - 1);
    }
  }
  initializeSlider() {
    let backgroundSlider      = findDOMNode(this.refs.backgroundSlider),
        backgroundSlides      = backgroundSlider.childNodes,
        backgroundSlidesArray = [...backgroundSlides],
        backgroundLength      = backgroundSlidesArray.length,
        backgroundTransform   = ((100 / backgroundLength) * this.state.slideIndex),
        screenSlider          = findDOMNode(this.refs.screenSlider),
        screenSlides          = screenSlider.childNodes,
        screenSlidesArray     = [...screenSlides],
        screenLength          = screenSlidesArray.length,
        screenTransform       = ((100 / screenLength) * this.state.slideIndex),
        i;

    for(i = 0; i < screenLength; i++) {
      screenSlidesArray[i].style.width = ( 90 / screenLength) + "%";
      screenSlidesArray[i].style.marginRight = ( 10 / screenLength) + "%";
    }
    for(i = 0; i < backgroundLength; i++) {
      backgroundSlidesArray[i].style.width = ( 100 / backgroundLength) + "%";
    }

    backgroundSlider.style.width = (backgroundLength * 100) + "%";
    screenSlider.style.width     = (screenLength * 110.8) + "%";
    helpers.prefix(backgroundSlider.style, "Transform", `translateX(-20%)`);
    helpers.prefix(screenSlider.style,     "Transform", `translateX(-20%)`);
  }
  goTo(index) {
    let backgroundSlider      = findDOMNode(this.refs.backgroundSlider),
        backgroundSlides      = backgroundSlider.childNodes,
        backgroundSlidesArray = [...backgroundSlides],
        backgroundLength      = backgroundSlidesArray.length,
        screenSlider          = findDOMNode(this.refs.screenSlider),
        screenSlides          = screenSlider.childNodes,
        screenSlidesArray     = [...screenSlides],
        screenLength          = screenSlidesArray.length;

    if (index < 0) {
      let lastItem = screenLength - 1;
      helpers.prefix(backgroundSlider.style, "Transform", "translateX(-" + ((100 / backgroundLength) * lastItem) + "%)");
      helpers.prefix(screenSlider.style,     "Transform", "translateX(-" + ((100 / screenLength)     * lastItem) + "%)");
      this.setState({ slideIndex: lastItem });
      return;
    } else if (index > screenLength - 1) {
      helpers.prefix(backgroundSlider.style, "Transform", "translateX(0)");
      helpers.prefix(screenSlider.style,     "Transform", "translateX(0)");
      this.setState({ slideIndex: 0 });
      return;
    } else {
      helpers.prefix(backgroundSlider.style, "Transform", "translateX(-" + ((100 / backgroundLength) * index) + "%)");
      helpers.prefix(screenSlider.style,     "Transform", "translateX(-" + ((100 / screenLength) * index) + "%)");
      this.setState({ slideIndex: index });
    }
  }
  render() {
    let { backgroundImages, screenImages, phone } = this.props;
    return (
      <div className="slider">
        <div className="phone-slider">
          <div className="phone-slider__background background">
            <ul ref="backgroundSlider" className="background__list">
              {backgroundImages.map((item, index) => (
                <PhoneSlide
                  key={index}
                  slideIndex={this.state.slideIndex}
                  index={index}
                  onClick={this.goTo}
                  img={item}
                  type="background"
                />
              ))}
            </ul>
          </div>
          <div className="phone-slider__phone">
            <img ref="screen" src={phone} alt="iPhone"/>
            <div className="phone-slider__screen screen">
              <ul ref="screenSlider" className="screen__list">
                {screenImages.map((item, index) => (
                  <PhoneSlide
                    key={index}
                    slideIndex={this.state.slideIndex}
                    index={index}
                    img={item}
                    type="screen"
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PhoneSlider;
