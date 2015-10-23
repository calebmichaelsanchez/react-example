import React, { Component } from 'react';
import Nav from './globals/Nav';
import Footer from './globals/Footer';
import Home from './Home';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navTheme: ''
    };
  }
  render(){
    let theme = this.state.navTheme;
    //let children = React.cloneElement(this.props.children, { setNavTheme: this.setNavTheme });
    return (
      <div className="app-wrapper">
        <Nav theme={ theme } />
        {this.props.children}
        <Footer />
      </div>
    );
  }
};

export default App;