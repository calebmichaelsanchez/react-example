import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import SeeMore from '../../shared/SeeMore';
import { images } from './Data';

class Fluid extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    window.ga('send', 'pageview', '/making-it-awesome-with/fluid');
    window.scrollTo(0, 0);
    this.props.setNavTheme(this.props.theme);
  }
  render() {
    return (
      <DocumentTitle title="Fluid | Underbelly Creative">
        <div className="case-study fluid">
          <div id="fluid-hero" className="hero">
            <section id="parallax-ipad-container" className="ipad">
              <img id="parallax-ipad-item" src={images.ipad} alt=""/>
            </section>
            <div className="project-meta">
              <div className="hero-lg">Fluid Notes</div>
              <p>Brand Identity &amp; UI Design</p>
            </div>
          </div>
          <section className="case-study-info">
            <div className="container-sm">
              <div className="grid-1-2 grid-copy challenge">
                <h1>The Challenge</h1>
                <p>Fluid Notes (formally Ghostwriter) is a five-star iPad app for note taking. While the app was well liked and had a good market base, the fluid team wanted to expand the interactions of the app and give the brand an update.</p>
              </div>
              <div className="grid-1-2 grid-copy solution">
                <h1>The Solution</h1>
                <p>We worked with the Fluid team to update the UI and UX of the app, create a new identity, and design a new site. Our updates helped create a more robust and easy to use app, with a wider appeal to a growing audience.</p>
                <a href="http://getfluidapp.com">GetFluidApp.com</a>
              </div>
            </div>
          </section>
          <section className="branding-exploration">
            <div className="container-sm">
              <h1>Branding</h1>
              <img src={images.brand} alt=""/>
            </div>
          </section>
          <section className="mark-exploration">
            <div className="container-sm">
              <h1>Mark Exploration</h1>
              <div className="logotypes">
                <div className="grid-1-3 no-break">
                  <img src={images.mark.one} alt=""/>
                </div>
                <div className="grid-1-3 no-break">
                  <img src={images.mark.two} alt=""/>
                </div>
                <div className="grid-1-3 no-break">
                  <img src={images.mark.three} alt=""/>
                </div>
              </div>
              <div className="app-icons">
                <div className="grid-1-3 no-break">
                  <img src={images.mark.four} alt=""/>
                </div>
                <div className="grid-1-3 no-break">
                  <img src={images.mark.five} alt=""/>
                </div>
                <div className="grid-1-3 no-break">
                  <img src={images.mark.six} alt=""/>
                </div>
              </div>
            </div>
          </section>
          <section className="detailed-icon">
            <div className="container-sm">
              <h1>Detailed Icon</h1>
              <img src={images.icon.md} alt=""/>
            </div>
          </section>
          <section className="lifestyle">
            <div className="container-sm">
              <div className="video widescreen">
                <iframe src="https://player.vimeo.com/video/60216372" width="500" height="281" frameBorder="0" allowFullScreen></iframe>
              </div>
              <img src={images.lifestyle} alt=""/>
              <div className="quote">
                <p>"Underbelly brought a team of experienced and approachable designers to assist our development team and produce an awesome user interface for the app."</p>
                <span className="author">- Michael Privat</span>
              </div>
            </div>
          </section>
          <SeeMore items={[
            { 'url': 'hive', 'title': 'Hive', 'img': images.seeMore.one },
            { 'url': 'just-family', 'title': 'Just Family', 'img': images.seeMore.two },
            { 'url': 'nsac', 'title': 'North Seathlle Alliance Church', 'img': images.seeMore.three },
            { 'url': 'rent-tree', 'title': 'RentTree', 'img': images.seeMore.four }
          ]}/>
        </div>
      </DocumentTitle>
    );
  }
}

Fluid.propTypes = {
  'name': React.PropTypes.string,
  'theme': React.PropTypes.string,
  'setNavTheme': React.PropTypes.func
};

Fluid.defaultProps = {
  'name': 'Fluid',
  'theme': 'light'
};

export default Fluid;
