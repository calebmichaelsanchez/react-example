import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import SeeMore from '../../shared/SeeMore';
import { images } from './Data';

class JustFamily extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    window.ga('send', 'pageview', '/making-it-awesome-with/just-family');
    this.props.setNavTheme(this.props.theme);
  }
  render() {
    return (
      <DocumentTitle title="JustFamily | Underbelly Creative">
        <div className="case-study just-family">
          <div className="hero"></div>
          <section className="case-study-info">
            <div className="container-sm">
              <div className="grid-1-2 grid-copy challenge">
                <h1>The Challenge</h1>
                <p>Combining all of your family photos from mobile phones and computers is an ever growing problem. Just Family is an app that allows people to combine and organize photos from everyone in their household and access them from anywhere.</p>
              </div>
              <div className="grid-1-2 grid-copy challenge">
                <h1>The Solution</h1>
                <p>We worked on a daily basis with Just Family to create a cohesive brand identity and user experience that would highlight the ease and functionality of the app.</p>
                <p><a target="_blank" href="http://justfamily.com">JustFamily.com</a></p>
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
              <img src={images.exploration} alt=""/>
            </div>
          </section>
          <div className="sketch"></div>
          <section className="app-ui">
            <div className="container-sm">
              <h1>App UI</h1>
              <div className="browser">
                <img src={images.app.one} alt=""/>
              </div>
              <div className="mobile">
                <img src={images.app.two} alt=""/>
              </div>
            </div>
          </section>
          <section className="app-icon">
            <div className="container-sm">
              <h1>App Icon</h1>
              <img src={images.icon.one} alt="Large Icon"/>
              <img src={images.icon.one} alt="Medium Icon"/>
              <img src={images.icon.one} alt="Small Icon"/>
            </div>
          </section>
          <section className="lifestyle">
            <div className="container-sm">
              <h1>See It In Action</h1>
              <div className="video widescreen">
                <iframe src="https://player.vimeo.com/video/111005756" width="500" height="281" frameBorder="0" allowFullScreen></iframe>
              </div>
              <img src={images.lifestyle} alt=""/>
              <div className="quote">
                <p>"Underbelly constantly impressed us with both their craftsmanship and creativity. We did better work because we worked with them."</p>
                <span className="author">- Nate Quigley</span>
              </div>
            </div>
          </section>
          <SeeMore items={[
            { 'url': 'nsac', 'title': 'North Seattle Alliance Church', 'img': images.seeMore.one },
            { 'url': 'rent-tree', 'title': 'RentTree', 'img': images.seeMore.two },
            { 'url': 'traxion', 'title': 'Traxion App', 'img': images.seeMore.three },
            { 'url': 'aiga', 'title': 'AIGA Salt Lake City 100 Show', 'img': images.seeMore.four }
          ]}/>
        </div>
      </DocumentTitle>
    );
  }
}

JustFamily.propTypes = {
  'name': React.PropTypes.string.isRequired,
  'theme': React.PropTypes.string.isRequired,
  'setNavTheme': React.PropTypes.func
};

JustFamily.defaultProps = {
  'name': 'just-family',
  'theme': 'dark'
};

export default JustFamily;
