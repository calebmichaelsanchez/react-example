import React, { Component } from 'react';
import Nav from '../shared/Nav';
import Footer from '../shared/Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navTheme       : '',
      windowWidth    : window.innerWidth || document.documentElement.clientWidth,
      documentHeight : Math.max( document.body.scrollHeight,
                                 document.documentElement.scrollHeight,
                                 document.body.offsetHeight,
                                 document.documentElement.offsetHeight,
                                 document.body.clientHeight,
                                 document.documentElement.clientHeight ),
      pageYOffset    : window.pageYOffset,
      viewportHeight : window.innerHeight || document.documentElement.clientHeight
    }
    this.setNavTheme = this.setNavTheme.bind(this);
    this.onScroll = this.onScroll.bind(this);
    this.onResize = this.onResize.bind(this);
  }
  componentDidMount() {
    window.addEventListener("scroll", this.onScroll, false);
    window.addEventListener("resize", this.onResize, false);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll, false);
    window.removeEventListener("resize", this.onResize, false);
  }
  onScroll() {
    this.setState({ pageYOffset: window.pageYOffset });
  }
  onResize() {
    this.setState({
      windowWidth    : window.innerWidth || document.documentElement.clientWidth,
      documentHeight : Math.max( document.body.scrollHeight,
                                 document.documentElement.scrollHeight,
                                 document.body.offsetHeight,
                                 document.documentElement.offsetHeight,
                                 document.body.clientHeight,
                                 document.documentElement.clientHeight ),
      pageYOffset    : window.pageYOffset,
      viewportHeight : window.innerHeight || document.documentElement.clientHeight
    });
  }
  setNavTheme (theme) {
    this.setState({ navTheme: theme });
  }
  render(){
    let { navTheme, windowWidth, documentHeight, pageYOffset, viewportHeight } = this.state,
        children     = React.cloneElement(this.props.children, {
                          setNavTheme    : this.setNavTheme,
                          windowWidth    : windowWidth,
                          documentHeight : documentHeight,
                          pageYOffset    : pageYOffset,
                          viewportHeight : viewportHeight
                        });
    return (
      <div className="app-wrapper">
        <Nav theme={navTheme} />
        {children}
        <Footer />
      </div>
    );
  }
};

export default App;
