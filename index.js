"use strict";

require("babel-core/register.js");

var express = require('express');
var path = require('path');
var React = require('react');
var ReactDOM = require('react-dom/server');
var FormEmail = React.createFactory(require('./app/components/form/FormEmail.jsx'));
var axios = require('axios')

var bodyParser = require('body-parser');
var app = express();

app.use(express.static(__dirname + '/build'));
app.use(bodyParser.json());

app.post('/contact-form', function(req, res) {
	res.send("Axios Post Recieved!")
	console.log(req.body);
	var model = req.body;
	var body = ReactDOM.renderToStaticMarkup( FormEmail({ model: model}) );
	console.log(body);
	var data = {
		key: process.env.APIKEY,
		message: {
			from_email: model.email,
			to: [{
				email: "hello@underbelly.is",
				name: "Underbelly Creative",
				type: "to"
			}],
			autotext: "true",
			subject: "Work with us",
			html: body
		}
	};
	axios.post("https://mandrillapp.com/api/1.0/messages/send.json", data)
		.then(function() {
			console.log("Sent!")
		})
		.catch(function (res) {
			console.log(res.statusCode);
		})
});

app.get('*', function (request, response) {
	response.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

var port = process.env.PORT || 3000;
app.listen(port);
console.log("Listening on port " + port);

// var renderToString = require('react-dom/server');
// var createLocation = require('history/lib/createLocation');
// var Router= require('react-router');
// var routes = require('../app/routes.js');
// match, RoutingContext
// app.use(function (req, res) {
// 	//var location = createLocation(req.url);
// 	//console.log(routes);

// 	// Router.match({ routes, location }, function (error, redirectLocation, renderProps) {
// 	// 	if (error) {
// 	// 		res.send(500, error.message);
// 	// 	} else if (redirectLocation) {
// 	// 		res.redirect(302, redirectLocation.pathname + redirectLocation.search);
// 	// 	} else if (renderProps) {
// 	// 		res.send(200, renderToString(<RoutingContext {...renderProps} />));
// 	// 	} else {
// 	// 		res.send(404, 'Not found')
// 	// 	}
// 	// });
// });


// app.get('*', function (request, response) {
// 	resonse.sendFile(path.resolve(__dirname, 'app', 'index.html'));
// });

// app.post("/#/contact", function(req, res) {
// 	res.send('Axios post recieved');
// 	console.log(req.body);
// });
