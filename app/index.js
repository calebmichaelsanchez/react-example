import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Router, { Route, IndexRoute } from 'react-router';

import Nav from './components/globals/Nav';
import Footer from './components/globals/Footer';
import routes from './routes';

require("./stylesheets/client.scss");

ReactDOM.render( routes, document.getElementById('app'));
