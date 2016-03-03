var express = require('express');
var path = require('path');
var favicon = require('serve-favicon'),
    serveStatic = require('serve-static')
  , bodyParser = require('body-parser')
  , jsonParser = bodyParser.json();
var logger = require('morgan');
var cookieParser = require('cookie-parser');

var app = express();
//app.use(serveStatic(__dirname + '/views'));
app.use(serveStatic(__dirname + '/assets'));
app.use(jsonParser);


exports.server = app;
