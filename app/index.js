import React from 'react';
import { render } from 'react-dom';
import { Router, applyRouterMiddleware, browserHistory } from 'react-router';
import useScroll from 'react-router-scroll';
import routes from './config/routes';

useScroll((prevRouterProps, { routes }) => {
  if (routes.some(route => route.scrollToTop)) {
    return [0, 0];
  }
  return true;
});

require('./stylesheets/index.scss');

render(
  <Router
    render={applyRouterMiddleware(useScroll())}
    routes={routes}
    history={browserHistory}
  />,
  document.getElementById('app')
);
