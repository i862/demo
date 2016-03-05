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
var crypto = require('crypto');


var app = express();
app.engine('.html', ejs.__express);
app.set('view engine', 'html');
//app.use(serveStatic(__dirname + '/views'));
//app.use(serveStatic(__dirname + '/assets'));
app.use(jsonParser);

app.get('/test',function(req,res){
  console.log(req.headers);
  res.send('helloe woereldee ee1ee=e' + Date.now());
});
app.post('/git/auto',function(req,res){
  callfile.execFile((__dirname + '/bash/autoPull.sh'),function (err, stdout, stderr) {
    callback(err, stdout, stderr);
  });
  var hmac = crypto.createHmac('sha1','amenema').update(JSON.stringify(req.body)).digest('hex');

  console.log('============e=========');
  console.log(req.headers);
  console.log(req.headers.x-hub-signature);
  console.log('ref:  '+req.body.ref);
  console.log('serverId:  '+req.body.repository.id);
  console.log('serverName:  '+req.body.repository.name);
  console.log('==============e=======');
  res.send('ok');
});

exports.server = app;
