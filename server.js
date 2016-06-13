'use strict';
require('dotenv').load();

// Mailgun setup
import mailgun, { Mailgun } from 'mailgun';
let { MAIL_TOKEN, GUMROAD_TOKEN } = process.env;
let mg = new Mailgun(MAIL_TOKEN);

// Express setup
import express     from 'express';
import path        from 'path';
import compression from 'compression';
import bodyParser  from 'body-parser';
let app = express();

import axios from 'axios';
import React from 'react'
import { renderToString } from 'react-dom/server'
import { match, RouterContext } from 'react-router'
import routes from './app/config/routes';

app.use(compression());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('*', function(req, res) {
  console.log(path.join(__dirname, 'public'));
  res.sendFile('index.html', { root: path.join(__dirname, 'public') });
});

app.get('*', (req, res) => {
  match({ routes: routes, location: req.url }, (err, redirect, props) => {
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
      <link rel="shortcut icon" href="https://s3.amazonaws.com/underbelly/website/favicon.ico" type="image/x-icon" />
      <script>
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

        ga('create', 'UA-43535207-1', 'auto');
      </script>
      <script>
        !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
        n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
        document,'script','https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '490202104468547');
        fbq('track', "PageView");
        </script>
      <noscript><img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=490202104468547&ev=PageView&noscript=1" /></noscript>
      <script src="https://s3.amazonaws.com/underbelly/js/gsap/TweenMax.min.js"></script>
      <script src="https://s3.amazonaws.com/underbelly/js/gsap/plugins/MorphSVGPlugin.min.js"></script>
      <script src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/findShapeIndex.js"></script>
    <link href="/app/stylesheets/index.css" rel="stylesheet"></head>
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
      <script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.16/webfont.js"></script>
    <script type="text/javascript" src="bundle.js"></script></body>
    </html>
   `
}

app.post('/products', function(req, res) {
  axios.get("https://api.gumroad.com/v2/products", { data: { access_token: GUMROAD_TOKEN } })
  .then( function (response) { res.send(response.data); })
  .catch( function (response) { res.send(response); });
});

app.post('/contact-form', function(req, res) {
  var status;
  var model = req.body;
  var data = {
    sender: model.email,
    recipients: 'hello@underbelly.is',
    subject: 'Work With Us',
    text: 'Name: ' + model.name + '\nEmail: ' + model.email + '\nAbout: ' + model.about + '\nServices: ' + model.service + '\nTiming: ' + model.timeline + '\nBudget: ' + model.budget
  }
  mg.sendText(data.sender, data.recipients, data.subject, data.text, function(err) {
    status = err;
    if (!status) {
     res.send('sent');
    } else {
     res.send(status);
     console.log(status);
    }
  });
});

var port = process.env.PORT || 3000;
app.listen(port);
console.log('Listening on port ' + port);
