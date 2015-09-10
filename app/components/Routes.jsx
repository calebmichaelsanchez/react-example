import React from 'react';
import { Router, Route, DefaultRoute, NotFoundRoute } from 'react-router';
import Main from './Main'
import Home from './Home';
import About from './About';
import Store from './Store';
import Contact from './Contact';
import NotFound from './NotFound';

var routes = (
	<Route name="main" path="/" handler={Main}>

		<DefaultRoute name="home" handler={Home} />
		
		<Route name="about" path="/about" handler={About} />
		
		<Route name="store" path="/store" handler={Store} />
		
		<Route name="contact" path="/contact" handler={Contact} />

		<NotFoundRoute name="not-found" handler={NotFound}/>
	
	</Route>
);

export default routes;