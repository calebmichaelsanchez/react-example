import React, { Component } from 'react';
import Projects from './Projects';

class Work extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let { setNavTheme } = this.props;
    if (this.props.children) {
      return React.cloneElement(this.props.children, {
        'setNavTheme': setNavTheme
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
  'children': React.PropTypes.object
};

Work.defaultProps = {
  'theme': 'dark'
};

export default Work;
