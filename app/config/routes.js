import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App         from '../screens/App/components/App';
import Home        from '../screens/App/components/Home';
import Work        from '../screens/App/screens/Work/components/Work';
import Contact     from '../screens/App/screens/Contact/components/Contact';
import Store       from '../screens/App/screens/Store/components/Store';
import Aiga        from '../screens/App/screens/Work/screens/Aiga/components/Aiga';
//import Campus      from '../screens/App/screens/Work/screens/Campus';
import JustFamily  from '../screens/App/screens/Work/screens/JustFamily/components/JustFamily';
import Traxion     from '../screens/App/screens/Work/screens/Traxion/components/Traxion';
import Fluid       from '../screens/App/screens/Work/screens/Fluid/components/Fluid';
import BrightBytes from '../screens/App/screens/Work/screens/BrightBytes/components/BrightBytes';
import Hive        from '../screens/App/screens/Work/screens/Hive/components/Hive';
import RentTree    from '../screens/App/screens/Work/screens/RentTree/components/RentTree';
import Bountiful   from '../screens/App/screens/Work/screens/Bountiful/components/Bountiful';
import Nsac        from '../screens/App/screens/Work/screens/Nsac/components/Nsac';
import RunItOnce   from '../screens/App/screens/Work/screens/RunItOnce/components/RunItOnce';
import NoMatch     from '../screens/App/screens/NoMatch/components/NoMatch';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/all-ears" component={Contact} />
    <Route path="/peddling" component={Store} />
    <Route path="/making-it-awesome" component={Work}>
      <Route path="/making-it-awesome-with/aiga" component={Aiga} />
      {/*<Route path="/making-it-awesome-with/campus" component={Campus} />*/}
      <Route path="/making-it-awesome-with/just-family" component={JustFamily} />
      <Route path="/making-it-awesome-with/traxion" component={Traxion} />
      <Route path="/making-it-awesome-with/fluid" component={Fluid} />
      <Route path="/making-it-awesome-with/bright-bytes" component={BrightBytes} />
      <Route path="/making-it-awesome-with/hive" component={Hive} />
      <Route path="/making-it-awesome-with/rent-tree" component={RentTree} />
      <Route path="/making-it-awesome-with/bountiful-dental" component={Bountiful} />
      <Route path="/making-it-awesome-with/nsac" component={Nsac} />
      <Route path="/making-it-awesome-with/run-it-once" component={RunItOnce} />
    </Route>
    <Route path="*" component={NoMatch} />
  </Route>
);

export default routes
