import React from 'react';
import Main from '../components/Main';
import Home from '../components/Home';
import Contact from '../components/Contact';
import { Router, Route, DefaultRoute } from 'react-router';

var routes = (
	<Route path="/" handler={Main}>
		<DefaultRoute handler={Home} />
		<Route name="contact" path="/contact" handler={Contact} />
	</Route>
);

export default routes;