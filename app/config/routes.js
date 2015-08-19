import React from 'react';
import Main from '../components/Main';
import Home from '../components/Home';
import About from '../components/About';
import Store from '../components/Store';
import Contact from '../components/Contact';
import { Router, Route, DefaultRoute } from 'react-router';

var routes = (
	<Route path="/" handler={Main}>
		<DefaultRoute handler={Home} />
		<Route name="about" path="/about" handler={About} />
		<Route name="store" path="/store" handler={Store} />
		<Route name="contact" path="/contact" handler={Contact} />
	</Route>
);

export default routes;