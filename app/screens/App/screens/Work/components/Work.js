import React, { Component } from 'react';
import Projects from './Projects';

class Work extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let { setNavTheme, windowWidth, documentHeight, viewportHeight } = this.props;
    if (this.props.children) {
      return React.cloneElement(this.props.children, {
        'setNavTheme': setNavTheme,
        'windowWidth': windowWidth,
        'documentHeight': documentHeight,
        'viewportHeight': viewportHeight
      });
    }
    return (
      <section className="work">
        <Projects setNavTheme={this.props.setNavTheme} />
      </section>
    );
  }
}

Work.propTypes = {
  'theme': React.PropTypes.string.isRequired,
  'setNavTheme': React.PropTypes.func,
  'windowWidth': React.PropTypes.number,
  'documentHeight': React.PropTypes.number,
  'viewportHeight': React.PropTypes.number,
  'children': React.PropTypes.object
};

Work.defaultProps = {
  'theme': 'dark'
};

export default Work;
