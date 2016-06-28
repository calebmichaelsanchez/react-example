import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import SeeMore from '../../shared/SeeMore';
import { images } from './Data';

class Bountiful extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    window.ga('set', 'page', '/making-it-awesome-with/bountiful-dental');
    window.ga('send', 'pageview');
    window.scrollTo(0, 0);
    this.props.setNavTheme(this.props.theme);
  }
  render() {
    return (
      <DocumentTitle title="Bountiful Dental | Underbelly Creative">
        <div className="case-study bountiful">
          <div className="hero">
            <div className="project-meta">
              <div className="hero-lg">Bountiful Dental</div>
              <p>Brand Identity, Video Production, Web Design &amp; Development</p>
            </div>
          </div>
          <section className="case-study-info">
            <div className="container-sm">
              <div className="grid-1-2 grid-copy challenge">
                <h1>The Challenge</h1>
                <p>Bountiful Dental is small-practice dental office located just outside of Salt Lake City, Utah. Our designers created their identity from the ground up. We started with their logo and identity and followed up with the design and development of their site. In order to make the site cohesive we also shot photography and created an introductory video for them.</p>
              </div>
              <div className="grid-1-2 grid-copy challenge">
                <h1>The Solution</h1>
                <p>Our designers created their identity from the ground up, focusing on a fun and personal direction. We started with their logo and identity and followed up with the design and development of their site. In order to make the site more cohesive, we also shot photography and created an introductory video.</p>
                <p><a href="http://bountifuldental.com">BountifulDental.com</a></p>
              </div>
            </div>
          </section>
          <section className="branding">
            <div className="container-sm">
              <h1>Branding</h1>
              <img src={images.brand} alt=""/>
            </div>
          </section>
          <section className="exploration">
            <div className="container-sm">
              <h1>Exploration</h1>
              <div className="grid-1-4 no-break">
                <img src={images.exploration.one} alt=""/>
              </div>
              <div className="grid-1-4 no-break">
                <img src={images.exploration.two} alt=""/>
              </div>
              <div className="grid-1-4 no-break">
                <img src={images.exploration.three} alt=""/>
              </div>
              <div className="grid-1-4 no-break">
                <img src={images.exploration.four} alt=""/>
              </div>
            </div>
          </section>
          <section className="lifestyle">
            <div className="container-sm">
              <div className="video widescreen">
                <iframe src="https://player.vimeo.com/video/35450167" width="500" height="281" frameBorder="0" allowFullScreen></iframe>
              </div>
              <img src={images.lifestyle} />
            </div>
          </section>
          <section className="web">
            <div className="container-sm">
              <img className="web-img" src={images.web.web} alt=""/><img className="mobile-img" src={images.web.mobile} alt=""/>
              <div className="quote">
                <p>"I know a lot of small businesses in my industry are spending a lot more money on their identity and websites, but I have yet to see one that looks better than what Underbelly created for me."</p>
                <span className="author">- Benjamin Hadfield</span>
              </div>
            </div>
          </section>
          <SeeMore items={[
            { 'url': 'fluid', 'title': 'Fluid', 'img': images.seeMore.one },
            { 'url': 'hive', 'title': 'Hive', 'img': images.seeMore.two },
            { 'url': 'just-family', 'title': 'Just Family', 'img': images.seeMore.three },
            { 'url': 'nsac', 'title': 'North Seattle Alliance Church', 'img': images.seeMore.four }
          ]}/>
        </div>
      </DocumentTitle>
    );
  }
}

Bountiful.propTypes = {
  'name': React.PropTypes.string,
  'theme': React.PropTypes.string,
  'setNavTheme': React.PropTypes.func
};

Bountiful.defaultProps = {
  'name': 'bountiful',
  'theme': 'light'
};

export default Bountiful;
