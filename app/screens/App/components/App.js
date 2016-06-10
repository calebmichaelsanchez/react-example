import React, { Component } from 'react';
import Nav from '../shared/Nav';
import Footer from '../shared/Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'navTheme': '',
      'windowWidth': window.innerWidth || document.documentElement.clientWidth,
      'documentHeight': document.body.clientHeight,
      'viewportHeight': window.innerHeight || document.documentElement.clientHeight
    };
    this.setNavTheme = this.setNavTheme.bind(this);
    this.onResize = this.onResize.bind(this);
  }
  componentDidMount() {
    window.addEventListener('resize', this.onResize, false);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize, false);
  }
  onResize() {
    this.setState({
      'windowWidth': window.innerWidth || document.documentElement.clientWidth,
      'documentHeight': document.documentElement.clientHeight,
      'viewportHeight': window.innerHeight || document.documentElement.clientHeight
    });
  }
  setNavTheme(theme) {
    this.setState({ 'navTheme': theme });
  }
  render() {
    let { navTheme, windowWidth, documentHeight, viewportHeight } = this.state;
    let children = React.cloneElement(this.props.children, {
      'setNavTheme': this.setNavTheme,
      'windowWidth': windowWidth,
      'documentHeight': documentHeight,
      'viewportHeight': viewportHeight
    });
    return (
      <div className="app-wrapper">
        <Nav theme={navTheme} />
        {children}
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  'children': React.PropTypes.object
};

export default App;
