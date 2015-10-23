"use strict";

require("babel-core/register.js");

var express = require('express');
var path = require('path');
var React = require('react');
var renderToString = require('react-dom/server');
var createLocation = require('history/lib/createLocation');
var Router= require('react-router');
var routes = require('../app/routes.js');
var app = express();

app.use(express.static(__dirname + '/build'));

// match, RoutingContext

app.post('/contact-form', function(req, res) {
	res.send("Axios Post Recieved!")
	console.log(req.body);
});

app.use(function (req, res) {
	var location = createLocation(req.url);
	console.log(routes);

	// Router.match({ routes, location }, function (error, redirectLocation, renderProps) {
	// 	if (error) {
	// 		res.send(500, error.message);
	// 	} else if (redirectLocation) {
	// 		res.redirect(302, redirectLocation.pathname + redirectLocation.search);
	// 	} else if (renderProps) {
	// 		res.send(200, renderToString(<RoutingContext {...renderProps} />));
	// 	} else {
	// 		res.send(404, 'Not found')
	// 	}
	// });
});


// app.get('*', function (request, response) {
// 	resonse.sendFile(path.resolve(__dirname, 'app', 'index.html'));
// });

// app.post("/#/contact", function(req, res) {
// 	res.send('Axios post recieved');
// 	console.log(req.body);
// });

var port = process.env.PORT || 3000;
app.listen(port);
console.log("Listening on port " + port);
