var express = require('express');
var path = require('path');
var favicon = require('serve-favicon'),
    serveStatic = require('serve-static')
  , bodyParser = require('body-parser')
  , ejs = require('ejs')
  , jsonParser = bodyParser.json()
  , createHandler = require('github-webhook-handler')
  , handler = createHandler({ path: '/git/auto', secret: 'amenema' });
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
function run_cmd(cmd, args, callback) {
  var spawn = require('child_process').spawn;
  var child = spawn(cmd, args);
  var resp = "";

  child.stdout.on('data', function(buffer) { resp += buffer.toString(); });
  child.stdout.on('end', function() { callback (resp) });
}
handler.on('push', function (event) {
  console.log('Received a push event for %s to %s',
    event.payload.repository.name,
    event.payload.ref);
  run_cmd('sh', [__dirname + '/bash/autoPull.sh'], function(text){ console.log(text) });
})

exports.server = app;
