import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import SeeMore from '../../shared/SeeMore';
import { images } from './Data';

class RentTree extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    window.ga('set', 'page', '/making-it-awesome-with/rent-tree');
    window.ga('send', 'pageview');
    window.scrollTo(0, 0);
    this.props.setNavTheme(this.props.theme);
  }
  render() {
    return (
      <DocumentTitle title="Rent Tree | Underbelly Creative">
        <div className="case-study rent-tree">
          <div className="hero">
            <div className="project-meta">
              <div className="hero-lg">Rent Tree</div>
              <p>Brand Identity, Website and Collateral</p>
            </div>
          </div>
          <section className="case-study-info">
            <div className="container-sm">
              <div className="grid-1-2 grid-copy challenge">
                <h1>The Challenge</h1>
                <p>RentTree is a web app that allows renters to connect with landlords and visa versa. They came to us with a great idea in need of an identity and design. They needed a brand that would be friendly, inviting, clean, and functional: as well as a story that they could infuse throughout their marketing content.
                </p>
              </div><div className="grid-1-2 grid-copy solution">
                <h1>The Solution</h1>
                <p>We created a logo for them as well as an overall brand identity to use as they expand to mobile. We also designed their initial website that would highlight the simple interface and beautiful lifestyle photography.</p>
              </div>
            </div>
          </section>
          <section className="branding-exploration">
            <div className="container-sm">
              <h1>Branding</h1>
              <img src={images.brand} alt="Rent Tree Logo"/>
            </div>
          </section>
          <section className="mark-exploration">
            <div className="container-sm">
              <h1>Mark Exploration</h1>
              <img src={images.mark} alt="Mark exploration: squirrel, bird, rent tree, squirrel"/>
            </div>
          </section>
          <section className="lifestyle">
            <div className="container-sm">
              <h1>In Action</h1>
              <img src={images.action} alt=""/>
            </div>
          </section>
          <section className="website">
            <div className="container-sm">
              <img src={images.website} alt=""/>
            </div>
          </section>
          <SeeMore items={[
            { 'url': 'traxion', 'title': 'Traxion App', 'img': images.seeMore.one },
            { 'url': 'aiga', 'title': 'AIGA Salt Lake City 100 Show', 'img': images.seeMore.two },
            { 'url': 'fluid', 'title': 'Fluid', 'img': images.seeMore.three },
            { 'url': 'hive', 'title': 'Hive', 'img': images.seeMore.four }
          ]}/>
        </div>
      </DocumentTitle>
    );
  }
}
RentTree.propTypes = {
  'name': React.PropTypes.string,
  'theme': React.PropTypes.string,
  'setNavTheme': React.PropTypes.func
};
RentTree.defaultProps = {
  'name': 'rent-tree',
  'theme': 'light'
};
export default RentTree;
