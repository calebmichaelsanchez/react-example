"use strict";
require('dotenv').load();

var express         = require('express');
var path            = require('path');
var compression     = require('compression');

var async           = require('async');
var mandrill        = require("mandrill-api/mandrill");
var mandrill_client = new mandrill.Mandrill(process.env.MAIL_TOKEN);
var bodyParser      = require('body-parser');
var app             = express();

import axios from 'axios';
import React from 'react'
import { renderToString } from 'react-dom/server'
import { match, RouterContext } from 'react-router'
import routes from './app/config/routes';

app.use(compression());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('*', function(req, res) {
  console.log("Get * - Send File");
  res.sendFile("index.html", { root: path.join(__dirname, 'public') });
});

app.get('*', (req, res) => {
  match({ routes: routes, location: req.url }, (err, redirect, props) => {
    console.log("Match - Render Template");
    // in here we can make some decisions all at once
    if (err) {
      // there was an error somewhere during route matching
      res.status(500).send(err.message)
    } else if (redirect) {
      // we haven't talked about `onEnter` hooks on routes, but before a
      // route is entered, it can redirect. Here we handle on the server.
      res.redirect(redirect.pathname + redirect.search)
    } else if (props) {
      // if we got props then we matched a route and can render
      console.log("Math - Render Success");
      const appHtml = renderToString(<RouterContext {...props}/>)
      res.send(renderPage(appHtml))
    } else {
      // no errors, no redirect, we just didn't match anything
      res.status(404).send('Not Found')
    }
  });
});

function renderPage(appHtml) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <script src="https://use.typekit.net/lht5hll.js"></script>
      <script>try{Typekit.load({ async: true });}catch(e){}</script>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
      <title>Underbelly Creative</title>
      <link rel="stylesheet" href="/app/stylesheets/index.css" />
      <link rel="shortcut icon" href="/app/images/favicon.ico" type="image/x-icon" />
      <script>
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
        ga('create', 'UA-43535207-1', 'auto');
      </script>
    </head>
    <body>
    <div id="fb-root"></div>
    <script>
      window.fbAsyncInit = function() {
        FB.init({
          appId      : '904646599630384',
          xfbml      : true,
          version    : 'v2.5'
        });
      };
      (function(d, s, id){
         var js, fjs = d.getElementsByTagName(s)[0];
         if (d.getElementById(id)) {return;}
         js = d.createElement(s); js.id = id;
         js.src = "//connect.facebook.net/en_US/sdk.js";
         fjs.parentNode.insertBefore(js, fjs);
       }(document, 'script', 'facebook-jssdk'));
    </script>
    <div id="app">${appHtml}</div>
    <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');</script>
    <script src="/bundle.js"></script>
    </body>
    </html>
   `
}

app.post('/products', function(req, res) {
  axios.get("https://api.gumroad.com/v2/products", { data: { access_token: process.env.GUMROAD_TOKEN } })
  .then( function (response) { res.send(response.data); })
  .catch( function (response) { res.send(response); });
});

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
 }
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
