var express = require('express');
var path = require('path');
var favicon = require('serve-favicon')
  , serveStatic = require('serve-static')
  , bodyParser = require('body-parser')
  , ejs = require('ejs')
  , jsonParser = bodyParser.json()
  , logger = require('morgan');
var cookieParser = require('cookie-parser');
var execFile = require('child_process').execFile;
var crypto = require('crypto');

var configs = require('./webhook.json');


var app = express();
app.engine('.html', ejs.__express);
app.set('view engine', 'html');
//app.use(serveStatic(__dirname + '/views'));
//app.use(serveStatic(__dirname + '/assets'));
app.use(jsonParser);
app.get('/test',function(req,res){
  res.send('o     n k');
});
app.post('/git/auto',function(req,res){

  var payload = req.body;
  if(!payload.ref){
    return res.status(400).end('Warning! We have recorded your IP!');
  }
  var ref = payload.ref.split('/')[2]
    , signature = req.headers['x-hub-signature']?req.headers['x-hub-signature'].split('=')[1]:''
    , serverId = payload.repository?payload.repository.id:''
    , serverName = payload.repository?payload.repository.name:''
    , config = configs[serverName||''];
  if(!config)
    return res.status(400).send('no this config!');
  var
      realRef = config.ref||''
    , realServerId = config.serverId||''
    , realServerName = config.serverName||''
    , realShellPath = config.shellPath
    , realSignature = crypto.createHmac('sha1',config.secret||'').update(JSON.stringify(payload)).digest('hex');

  if(check(signature,realSignature,res,{code:403,msg:'wrong signature!'})
      && check(ref,realRef,res,{code:403,msg:'wrong ref'})
      && check(serverId,realServerId,res,{code:403,msg:'wrong serverId'})
      && check(serverName,realServerName,res,{code:403,msg:'wrong serverName'})
  ){
    execFile((__dirname + realShellPath));
    res.send('ok');
  }
});

var check = function(value1,value2,res,result){
  if(value1 && value2 && value1 == value2){
    return true;
  }else{
    res.status(result.code||403).end(result.msg||'');
    return false;
  }
};


exports.server = app;
