import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import Icon from '../shared/icons/Icon';
import { Link } from 'react-router';
import classNames from 'classnames';
import { images, logos } from '../screens/Home/Data';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { 'loaded': true };
  }
  componentDidMount() {
    window.ga('send', 'pageview', '/');
    this.props.setNavTheme(this.props.theme);
  }
  render() {
    let classes = classNames({ 'loaded': this.state.loaded });
    return (
      <DocumentTitle title="Home | Underbelly Creative">
        <div className="home">
          <div className={`hero-home ${classes}`}>
            <div className="what-we-do">
              <div className="category-item">
                <Icon icon="ux" />
                <span className="category-title">UX</span>
              </div>
              <div className="category-item">
                <Icon icon="brand" />
                <span className="category-title">Branding</span>
              </div>
              <div className="category-item">
                <Icon icon="dev" />
                <span className="category-title">Dev</span>
              </div>
              <Link to="/making-it-awesome" className="hero-cta">See our work <Icon icon="arrow" theme="light" type="icon-cta" /></Link>
            </div>
          </div>
          <section className="clients">
            <div className="container-sm">
              {logos.map((logo, index) =>
                <div className="clients__item" key={`icon-${index}`}><img src={logo} /></div>
              )}
            </div>
          </section>
          <section className="mission">
            <div className="container-xs">
              <p>We’re artists and craftsmen who love to create sophisticated strategies, innovative user experiences, and enduring brands. We don’t stop tinkering until the work inspires.</p>
            </div>
          </section>
          <section className="team-photo">
            <img src={images.team} alt="Team photo left to right (Anthony, Brad, Ben, Matt, Brittany, Scribner, Riley"/>
          </section>
          <section className="work-with-us">
            <Link to="/all-ears" className="h3 work-with-us-cta">
              Work with us <Icon icon="arrow" theme="light" type="icon-cta" />
            </Link>
          </section>
        </div>
      </DocumentTitle>
    );
  }
}

Home.propTypes = {
  'theme': React.PropTypes.string.isRequired,
  'setNavTheme': React.PropTypes.func
};

Home.defaultProps = {
  'theme': 'dark'
};

export default Home;
