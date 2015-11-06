import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import routes from './routes';
require("./assets/img/favicon.ico");
require("./libs/modernizr.js");
require("./stylesheets/client.scss");

ReactDOM.render( routes, document.getElementById('app'));
