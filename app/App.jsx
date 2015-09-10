import React from 'react';
import Router from 'react-router';
import routes from './components/Routes';

import './stylesheets/client.scss';

Router.run(routes, (Handler) => {
  React.render(<Handler/>, document.body);
});