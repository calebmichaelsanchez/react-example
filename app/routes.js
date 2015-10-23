import React from 'react';
import Router, { Route, IndexRoute } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import App from './components/App';
import Home from './components/Home';
// import Work from './routes/Work/components/Work';
// import Contact from './routes/Contact/components/Contact';
// import Store from './routes/Store/components/Shop';
// import Aiga from './routes/Work/routes/Aiga/components/Aiga';
// import JustFamily from './routes/Work/routes/JustFamily/components/JustFamily';
// import Traxion from './routes/Work/routes/Traxion/components/Traxion';
// import Fluid from './routes/Work/routes/Fluid/components/Fluid';
// import BrightBytes from './routes/Work/routes/BrightBytes/components/BrightBytes';

let setNavTheme = function (theme) {
  this.setState({
    theme: theme
  });
}

function createElement(Component, props) {
  Object.assign(props, {setNavTheme: setNavTheme});
  return <Component {...props} />
}

const routes = (
  <Router createElement={createElement} history={createBrowserHistory()} onUpdate={() => window.scrollTo(0, 0)}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
    </Route>
  </Router>
);

export default routes;