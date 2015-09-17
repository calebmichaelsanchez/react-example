import React from 'react';
import { Router } from 'react-router';

var rootRoute = {
  component: '',
  childRoutes: [{
    path: '/',
    component: require('./components/App'),
    childRoutes: [
      require('./routes/About'),
      require('./routes/Contact'),
      require('./routes/Store'),
      require('./routes/Work')
    ]
  }]
};
React.render(
	<Router routes={rootRoute} />,
	document.getElementById('app')
);