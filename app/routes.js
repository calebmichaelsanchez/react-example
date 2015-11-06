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
import Bountiful from './routes/Work/routes/Bountiful/components/Bountiful';
import Nsac from './routes/Work/routes/Nsac/components/Nsac';
import NoMatch from './routes/NoMatch/components/NoMatch';

const routes = (
  <Router history={createBrowserHistory()} onUpdate={() => window.scrollTo(0, 0)}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/all-ears" component={Contact} />
      <Route path="/peddling" component={Shop} />
      <Route path="/making-it-awesome" component={Work}>
        <Route path="/making-it-awesome-with/aiga" component={Aiga} />
        <Route path="/making-it-awesome-with/just-family" component={JustFamily} />
        <Route path="/making-it-awesome-with/traxion" component={Traxion} />
        <Route path="/making-it-awesome-with/fluid" component={Fluid} />
        <Route path="/making-it-awesome-with/bright-bytes" component={BrightBytes} />
        <Route path="/making-it-awesome-with/hive" component={Hive} />
        <Route path="/making-it-awesome-with/rent-tree" component={RentTree} />
        <Route path="/making-it-awesome-with/bountiful-dental" component={Bountiful} />
        <Route path="/making-it-awesome-with/nsac" component={Nsac} />
      </Route>
      <Route path="*" component={NoMatch} />
    </Route>
  </Router>
);

export default routes;