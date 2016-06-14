import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App         from '../screens/App/components/App';
import Home        from '../screens/App/components/Home';
import Work        from '../screens/App/screens/Work/components/Work';
import Contact     from '../screens/App/screens/Contact/components/Contact';
import Store       from '../screens/App/screens/Store/components/Store';
import Playground  from '../screens/App/screens/Work/screens/Playground/';
import Aiga        from '../screens/App/screens/Work/screens/Aiga';
import Campus      from '../screens/App/screens/Work/screens/Campus';
import JustFamily  from '../screens/App/screens/Work/screens/JustFamily';
import Traxion     from '../screens/App/screens/Work/screens/Traxion';
import Fluid       from '../screens/App/screens/Work/screens/Fluid';
import Hive        from '../screens/App/screens/Work/screens/Hive';
import RentTree    from '../screens/App/screens/Work/screens/RentTree';
import Bountiful   from '../screens/App/screens/Work/screens/Bountiful';
import Nsac        from '../screens/App/screens/Work/screens/Nsac';
import RunItOnce   from '../screens/App/screens/Work/screens/RunItOnce/';
import Splat       from '../screens/App/screens/Work/screens/SizzlingPlatter';
import NoMatch     from '../screens/App/screens/NoMatch/components/NoMatch';

module.exports = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/all-ears" component={Contact} />
    <Route path="/peddling" component={Store} />
    <Route path="/making-it-awesome" component={Work}>
      <Route path="/making-it-awesome-with/aiga" component={Aiga} />
      <Route path="/making-it-awesome-with/campus" component={Campus} />
      <Route path="/making-it-awesome-with/playground" component={Playground} />
      <Route path="/making-it-awesome-with/just-family" component={JustFamily} />
      <Route path="/making-it-awesome-with/traxion" component={Traxion} />
      <Route path="/making-it-awesome-with/fluid" component={Fluid} />
      <Route path="/making-it-awesome-with/hive" component={Hive} />
      <Route path="/making-it-awesome-with/rent-tree" component={RentTree} />
      <Route path="/making-it-awesome-with/bountiful-dental" component={Bountiful} />
      <Route path="/making-it-awesome-with/nsac" component={Nsac} />
      <Route path="/making-it-awesome-with/run-it-once" component={RunItOnce} />
      <Route path="/making-it-awesome-with/sizzling-platter" component={Splat} />
    </Route>
    <Route path="*" component={NoMatch} />
  </Route>
);
