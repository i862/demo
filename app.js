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

var config = require('./auto_shell.config.js');


var app = express();
app.engine('.html', ejs.__express);
app.set('view engine', 'html');
//app.use(serveStatic(__dirname + '/views'));
//app.use(serveStatic(__dirname + '/assets'));
app.use(jsonParser);
app.get('/test',function(req,res){
  res.send('o   k');
});
app.post('/git/auto',function(req,res){

  var payload = req.body
    , ref = payload.ref?payload.ref.split('/')[2]:''
    , signature = req.headers['x-hub-signature']?req.headers['x-hub-signature'].split('=')[1]:''
    , serverId = payload.repository?payload.repository.id:''
    , serverName = payload.repository?payload.repository.name:''
    , realRef = config.ref||''
    , realServerId = config.serverId||''
    , realServerName = config.serverName||''
    , realShellPath = config.shellPath
    , realSignature = crypto.createHmac('sha1',config.secret||'').update(JSON.stringify(payload)).digest('hex');

  if(check(signature,realSignature,res,{code:403,msg:'wrong signature!'})
      && check(ref,realRef,res,{code:403,msg:'wrong ref'})
      && check(serverId,realServerId,res,{code:403,msg:'wrong serverId'})
      && check(serverName,realServerName,res,{code:403,msg:'wrong serverName'})
  ){
    var shell = callfile.execFile((__dirname + realShellPath),function (err, stdout, stderr) {
      callback(err, stdout, stderr);
    });
    shell.on('exit',function(code){
      if(code != 0){
        console.log('code not 0:'+ code);
        res.status(403).send("the shell is exit with code:" + code);
      }else{
        console.log('code is 0');
        res.send("the shell named:" + realShellPath + " is exit with code 0 on the " + realServerName + '.');
      }
    });
    shell.on('error',function(err){
      console.log('process is error');
      console.log(error);
      res.status(500).send(err);
    });
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
