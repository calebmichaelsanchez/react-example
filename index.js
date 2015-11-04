"use strict";
require('dotenv').load();

var express = require('express');
var path = require('path');
var async = require('async');
var mandrill = require("mandrill-api/mandrill");
var mandrill_client = new mandrill.Mandrill(process.env.MAIL_TOKEN);
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());

if (process.env.NODE_ENV === 'development') {
	app.use(express.static('./build'));
	app.use("/app", express.static('./build/app'));
	app.use("/vendor", express.static('./build/vendor'));
	app.get('/*', function (request, response) {
		response.sendFile('./build/index.html');
	});
} else {
	app.use(express.static("./"));
	app.use("/app", express.static('./app'));
	app.use("/vendor", express.static('./vendor'));
	app.get('/*', function (request, response) {
		response.sendFile(path.resolve(__dirname, 'index.html'));
	});
}
app.post('/contact-form', function(req, res) {
	var status;
	var model = req.body;
	var data = {
		message: {
			from_email: model.email,
			to: [{
				email: "hello@underbelly.is",
				name: "Underbelly Creative",
				type: "to"
			}],
			autotext: "true",
			subject: "Work with us",
			html: "<div><h3>Name</h3><p>" + model.name + "</p><h3>Email</h3><p> " + model.email + "</p><h3>About</h3><p>" + model.about + "</p><h3>Services</h3><p>" + model.service + "</p><h3>Timing</h3><p>" + model.timeline + "</p><h3>Budget</h3><p>" + model.budget + "</p></div>"
		}
	};
	async.series([
		function(callback) {
			mandrill_client.messages.send(data, function(result) {
				status = result[0].status
				callback(null, 'one');
			});
		},
		function (callback) {
			res.send(status);
			callback(null, 'two');
		}
	],
	function(err, results) {
		console.log(err);
		console.log(results);
	});
});

var port = process.env.PORT || 3000;
app.listen(port);
console.log("Listening on port " + port);
