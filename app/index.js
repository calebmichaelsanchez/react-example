import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './config/routes';

require("./images/favicon.ico");
require("./stylesheets/index.scss");
require("./shared/libs/modernizr.js");
require("./shared/shims/classList.js");

render(<Router routes={routes} history={browserHistory} onUpdate={() => window.scrollTo(0, 0)}/>, document.getElementById('app'))
