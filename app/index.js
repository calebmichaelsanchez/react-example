import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Router, { Route, IndexRoute } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
//import App from './components/App';
import Home from './components/Home';
import Work from './routes/Work/components/Work';
import Contact from './routes/Contact/components/Contact';
import Store from './routes/Store/components/Shop';
import Aiga from './routes/Work/routes/Aiga/components/Aiga';
import JustFamily from './routes/Work/routes/JustFamily/components/JustFamily';
import Traxion from './routes/Work/routes/Traxion/components/Traxion';
import Fluid from './routes/Work/routes/Fluid/components/Fluid';
import BrightBytes from './routes/Work/routes/BrightBytes/components/BrightBytes';
import Nav from './components/globals/Nav';
import Footer from './components/globals/Footer';

require("./stylesheets/client.scss");

let setNavTheme = function (theme) {
  this.setState({
    theme: theme
  });
}

function createElement(Component, props) {
  Object.assign(props, {setNavTheme: setNavTheme});
  return <Component {...props} />
}

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

ReactDOM.render(
 <Router createElement={createElement} history={createBrowserHistory()} onUpdate={() => window.scrollTo(0, 0)}>
   <Route path="/" component={App}>
     <IndexRoute component={Home} />
     <Route path="/work" component={Work} >
      <Route path="aiga" component={Aiga} />
      <Route path="just-family" component={JustFamily} />
      <Route path="traxion" component={Traxion} />
      <Route path="fluid" component={Fluid} />
      <Route path="bright-bytes" component={BrightBytes} />
     </Route>
     <Route path="/contact" component={Contact} />
     <Route path="/store" component={Store} />
   </Route>
  </Router>,
  document.getElementById('app')
);