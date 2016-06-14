import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import SeeMore from '../../shared/SeeMore';
import { images } from './Data';

class Traxion extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    window.ga('send', 'pageview', '/making-it-awesome-with/traxion');
    window.scrollTo(0, 0);
    this.props.setNavTheme(this.props.theme);
  }
  render() {
    return (
      <DocumentTitle title="Traxion | Underbelly Creative">
        <div className="case-study traxion">
          <div className="hero">
            <div className="project-meta">
              <div className="hero-lg">Traxion</div>
              <p>iPhone App Design</p>
            </div>
          </div>
          <section className="case-study-info">
            <div className="container-sm">
              <div className="grid-1-2 grid-copy challenge">
                <h1>The Challenge</h1>
                <p>Traxion is an iPhone app used to help young adults manage their ADHD. This app combines several app functions into one so that ADHD can be managed in one centralized location. Submitted to the Health 2.0 conference in 2013 we were given a quick and challenging deadline we were more than happy to take on.</p>
              </div>
              <div className="grid-1-2 grid-copy challenge">
                <h1>The Solution</h1>
                <p>We started design by color coding the sections of the app to help categorize and organize the information being used in the app. Utilizing data about ADHD we designed the app for what individuals with ADHD need to succeed. Finally we animated several key aspects of the app to instill some playfulness in the various sections.</p>
              </div>
            </div>
          </section>
          <section className="award">
            <img src={images.award} alt=""/>
          </section>
          <section className="lifestyle">
            <div className="container-sm">
              <h1>App UI</h1>
              <img src={images.lifestyle} alt=""/>
            </div>
          </section>
          <section className="animations">
            <div className="container-sm">
              <h1>App Animations</h1>
              <div className="traxion-screen">
                <div className="screen-item">
                  <img src={images.animation.one} alt=""/>
                </div>
              </div>
              <div className="traxion-screen">
                <div className="screen-item">
                  <img src={images.animation.two} alt=""/>
                </div>
              </div>
              <div className="quote">
                <p>"Underbelly was great to work with. They spun their team up quickly, and approached the project with a perfect mix of creative reflection and pragmatic commitment to our timeframes."</p>
                <span className="author">- Jeff Lee</span>
              </div>
            </div>
          </section>
          <SeeMore items={[
            { 'url': 'aiga', 'title': 'AIGA Salt Lake City 100 Show', 'img': images.seeMore.one },
            { 'url': 'fluid', 'title': 'Fluid', 'img': images.seeMore.two },
            { 'url': 'hive', 'title': 'Hive', 'img': images.seeMore.three },
            { 'url': 'just-family', 'title': 'Just Family', 'img': images.seeMore.four }
          ]}/>
        </div>
      </DocumentTitle>
    );
  }
}

Traxion.propTypes = {
  'name': React.PropTypes.string.isRequired,
  'theme': React.PropTypes.string.isRequired,
  'setNavTheme': React.PropTypes.func
};

Traxion.defaultProps = {
  'name': 'traxion',
  'theme': 'dark'
};

export default Traxion;
