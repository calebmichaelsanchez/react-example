"use strict";
require('dotenv').load();

var express = require('express');
var path = require('path');
var compression = require('compression');

var async = require('async');
var mandrill = require("mandrill-api/mandrill");
var mandrill_client = new mandrill.Mandrill(process.env.MAIL_TOKEN);
var bodyParser = require('body-parser');
var app = express();

import axios from 'axios';

app.use(compression());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')))

app.get('*', function(req, res) {
  res.sendFile("index.html", { root: path.join(__dirname, 'public') })
});

app.post('/products', function(req, res) {
  axios.get("https://api.gumroad.com/v2/products", {
    data: { access_token: process.env.GUMROAD_TOKEN }
  })
  .then( function (response) { res.send(response.data); })
  .catch( function (response) { res.send(response); });
})

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
       callback(null, 'form sent');
     });
   },
   function (callback) {
     res.send(status);
     callback(null, 'respond to the server');
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
