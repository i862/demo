var express = require('express');
var path = require('path');
var favicon = require('serve-favicon')
  , serveStatic = require('serve-static')
  , bodyParser = require('body-parser')
  , ejs = require('ejs')
  , jsonParser = bodyParser.json()
  , logger = require('morgan');
var cookieParser = require('cookie-parser');
var callfile = require('child_process');



var app = express();
app.engine('.html', ejs.__express);
app.set('view engine', 'html');
//app.use(serveStatic(__dirname + '/views'));
//app.use(serveStatic(__dirname + '/assets'));
app.use(jsonParser);

app.get('/test',function(req,res){
  console.log(req.headers);
  res.send('hello world 1eee' + Date.now());
});
app.post('/git/auto',function(req,res){
  console.log('=====================');
  console.log(req.headers);
  console.log('ref:  '+req.body.ref);
  console.log('serverId:  '+req.body.repository.id);
  console.log('serverName:  '+req.body.repository.name);
  console.log('secret:  '+req.body.config.secret);
  console.log('=====================');
  callfile.execFile((__dirname + '/bash/autoPull.sh'),function (err, stdout, stderr) {
    callback(err, stdout, stderr);
  });
  res.send('ok');
});

exports.server = app;
