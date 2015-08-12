import React from 'react';
import Router from 'react-router';
import routes from './config/routes';
require('./stylesheets/client.scss');

// Router.run(routes, Router.HistoryLocation, (Handler) => {
//   React.render(<Handler/>, document.getElementById('app'));
// });

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});