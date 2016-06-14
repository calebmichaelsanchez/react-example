import React, { Component } from 'react';
import Nav from '../shared/Nav';
import Footer from '../shared/Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 'navTheme': '' };
    this.setNavTheme = this.setNavTheme.bind(this);
  }
  setNavTheme(theme) {
    this.setState({ 'navTheme': theme });
  }
  render() {
    let { navTheme } = this.state;
    let children = React.cloneElement(this.props.children, {
      'setNavTheme': this.setNavTheme
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
