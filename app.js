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
var callfile = require('child_process');



var app = express();
app.engine('.html', ejs.__express);
app.set('view engine', 'html');
//app.use(serveStatic(__dirname + '/views'));
//app.use(serveStatic(__dirname + '/assets'));
app.use(jsonParser);

app.get('/test',function(req,res){
  console.log(req.headers);
  res.send('ok');
});
app.get('/',function(req,res){
  res.send('ok');
});
function run_cmd(cmd, args, callback) {
  callfile.execFile((__dirname + '/bash/autoPull.sh'),function (err, stdout, stderr) {
    callback(err, stdout, stderr);
  });
}
handler.on('push', function (event) {
  console.log('Received a push event for %s to %s',
    event.payload.repository.name,
    event.payload.ref);
})

exports.server = app;
