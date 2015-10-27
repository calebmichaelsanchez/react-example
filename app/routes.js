import React from 'react';
import Router, { Route, IndexRoute } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import App from './components/App';
import Home from './components/Home';
import Work from './routes/Work/components/Work';
import Contact from './routes/Contact/components/Contact';
import Shop from './routes/Store/components/Shop';
import Aiga from './routes/Work/routes/Aiga/components/Aiga';
import JustFamily from './routes/Work/routes/JustFamily/components/JustFamily';
import Traxion from './routes/Work/routes/Traxion/components/Traxion';
import Fluid from './routes/Work/routes/Fluid/components/Fluid';
import BrightBytes from './routes/Work/routes/BrightBytes/components/BrightBytes';
import Hive from './routes/Work/routes/Hive/components/Hive';
import RentTree from './routes/Work/routes/RentTree/components/RentTree';
import NoMatch from './routes/NoMatch/components/NoMatch';

const routes = (
  <Router onUpdate={() => window.scrollTo(0, 0)}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/contact" component={Contact} />
      <Route path="/store" component={Shop} />
      <Route path="/work" component={Work}>
        <Route path="aiga" component={Aiga} />
        <Route path="just-family" component={JustFamily} />
        <Route path="traxion" component={Traxion} />
        <Route path="fluid" component={Fluid} />
        <Route path="bright-bytes" component={BrightBytes} />
        <Route path="hive" component={Hive} />
        <Route path="rent-tree" component={RentTree} />
      </Route>
      <Route path="*" component={NoMatch} />
    </Route>
  </Router>
);

export default routes;