import React from 'react';
import { Router } from 'react-router';

var rootRoute = {
  component: '',
  childRoutes: [{
    path: '/',
    component: require('./components/App'),
    indexRoute: { component: require('./components/Home') },
    childRoutes: [
      require('./routes/About'),
      require('./routes/Contact'),
      require('./routes/Store'),
      require('./routes/Work')
    ]
  }]
};
React.render(
	<Router onUpdate={() => window.scrollTo(0, 0)} routes={rootRoute} />,
	document.getElementById('app')
);