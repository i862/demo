/**
 * Created by menzhongxin on 16/3/3.
 */
var http = require('http'),
  path = require('path'),
  app = require('./app').server;

  app.listen(3000);
  console.log('Server listening on port 3000');

