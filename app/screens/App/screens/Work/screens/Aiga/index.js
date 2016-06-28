import React, { Component } from 'react';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import DocumentTitle from 'react-document-title';
import { images } from './Data';
import SeeMore from '../../shared/SeeMore';

class Aiga extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    window.ga('set', 'page', '/making-it-awesome-with/aiga');
    window.ga('send', 'pageview');
    window.scrollTo(0, 0);
    this.props.setNavTheme(this.props.theme);
  }
  render() {
    return (
      <DocumentTitle title="AIGA | Underbelly Creative">
        <div className="case-study aiga">
          <div className="hero">
            <div className="project-meta">
              <div className="hero-lg">The 2014 AIGA 100 Show</div>
              <p>Brand Identity, UI Design, &amp; Web Development</p>
            </div>
          </div>
          <section className="case-study-info">
            <div className="container-sm">
              <div className="grid-1-2 grid-copy challenge">
                <h1>The Challenge</h1>
                <p>The AIGA 100 show is an event celebrating design talent in Utah. Several hundred pieces are submitted, but only the best 100 pieces make it. Out of those 100, ten are chosen to receive the coveted Copper Ingot. Underbelly had the amazing opportunity to create a concept, design, and website for the 25th anniversary.</p>
              </div><div className="grid-1-2 grid-copy solution">
                <h1>The Solution</h1>
                <p>Our designers created an art deco concept to highlight the fact that this year was the 25th anniversary. We crafted the entire experience, from an event landing page introducing everyone to the design, to all of the environmental and printed pieces at the event. The result was a cohesive feel throughout the show, including awards, certificates and posters that attendees were excited to take home.</p>
              </div>
            </div>
          </section>
          <section className="branding-exploration">
            <div className="container-sm">
              <h1>Brand Exploration</h1>
              <Tabs>
                <TabList>
                  <Tab>Geometric</Tab>
                  <Tab>Tools of the Trade</Tab>
                  <Tab>Mid-Century</Tab>
                </TabList>
                <TabPanel>
                  <div className="grid-1-3">
                    <img src={images.brand.geo.one} />
                  </div>
                  <div className="grid-1-3">
                    <img src={images.brand.geo.two} />
                  </div>
                  <div className="grid-1-3">
                    <img src={images.brand.geo.three} />
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="grid-1-3">
                    <img src={images.brand.tools.one} />
                  </div>
                  <div className="grid-1-3">
                    <img src={images.brand.tools.two} />
                  </div>
                  <div className="grid-1-3">
                    <img src={images.brand.tools.three} />
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="grid-1-3">
                    <img src={images.brand.midCentury.one} />
                  </div>
                  <div className="grid-1-3">
                    <img src={images.brand.midCentury.two} />
                  </div>
                  <div className="grid-1-3">
                    <img src={images.brand.midCentury.three} />
                  </div>
                </TabPanel>
              </Tabs>
            </div>
          </section>
          <section className="final-direction">
            <div className="container-sm">
              <h1>Finalized Direction</h1>
              <img src={images.finalDirection} />
            </div>
          </section>
          <section className="lifestyle">
            <div className="container-sm">
              <img src={images.lifeStyle.one} />
              <div className="video widescreen">
                <iframe src="https://player.vimeo.com/video/96955791" width="500" height="281" frameBorder="0" allowFullScreen></iframe>
              </div>
              <img src={images.lifeStyle.two} />
            </div>
          </section>
          <section className="website">
            <div className="container-sm">
              <h1>Website</h1>
              <img src={images.website} />
              <div className="quote">
                <p>"Underbelly couldn’t have done a better job with branding the 100 Show. Every piece was so thought out, and beautifully executed. They worked tirelessly to give us the best product possible, and it really showed!"</p>
                <span className="author">- Kassie Wright</span>
              </div>
            </div>
          </section>
          <SeeMore items={[
            { 'url': 'rent-tree', 'title': 'RentTree', 'img': images.seeMore.one },
            { 'url': 'nsac', 'title': 'North Seattle Alliance Church', 'img': images.seeMore.two },
            { 'url': 'fluid', 'title': 'Fluid', 'img': images.seeMore.three },
            { 'url': 'bountiful-dental', 'title': 'Bountiful Dental', 'img': images.seeMore.four }
          ]}/>
        </div>
      </DocumentTitle>
    );
  }
}

Aiga.propTypes = {
  'name': React.PropTypes.string,
  'theme': React.PropTypes.string,
  'setNavTheme': React.PropTypes.func
};

Aiga.defaultProps = {
  'name': 'aiga',
  'theme': 'dark'
};

export default Aiga;
