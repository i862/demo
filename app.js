var express = require('express');
var path = require('path');
var favicon = require('serve-favicon'),
    serveStatic = require('serve-static')
  , bodyParser = require('body-parser')
  , ejs = require('ejs')
  , jsonParser = bodyParser.json();
var logger = require('morgan');
var cookieParser = require('cookie-parser');

var app = express();
app.engine('.html', ejs.__express);
app.set('view engine', 'html');
//app.use(serveStatic(__dirname + '/views'));
//app.use(serveStatic(__dirname + '/assets'));
app.use(jsonParser);

app.post('/git/auto/',function(req,res){
  console.log("===================================");
  console.log(req.body);
  console.log("===================================");
  console.log(req.headers.secret);
  console.log(req.headers);
  res.send('ok');
});
app.get('/',function(req,res){
  res.send('ok');
});



exports.server = app;
