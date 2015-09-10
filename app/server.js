"use strict";

//require('babel-core/polyfill')({ignore: false});
require('node-jsx-babel').install({extension: '.jsx'})

var React = require("react");
var Router = require("react-router");
var routes = require("./components/Routes");

var express = require("express");
var path = require("path");
var app = express();

app.use("/", express.static(path.join(__dirname, "../build")));
//server.use(express.static(path.join(__dirname, "./app/assets")));


app.use((req, res) => {
  Router.run(routes, req.path, (Root, state) => {
    console.log(<Root/>);
    //res.send(htmlBody);
  });
});

var port = process.env.PORT || 3000;
server.listen(port);
console.log("Listening on port " + port);
