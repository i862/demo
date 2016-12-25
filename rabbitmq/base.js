/**
 * Created by menzhongxin on 16/8/17.
 */
var amqp = require('amqplib/callback_api');
//var isClosed = false;
var dealErr = function(err){
  console.log(err);
};
var cc = function(conn, task){
  conn.createChannel(function (err, ch) {
    err? dealErr(err):task(conn, ch);
  });
};
//var close = function(conn,time){
//  isClosed && setTimeout(function(){ conn.close();process.exit(0);}, time || 500);
//};
var base = exports.base = function(task) {
  amqp.connect('amqp://amen:amen@115.28.45.182:5672', function (err, conn) {
    err?dealErr(err):cc(conn, task);
  });
};
var getSverity = exports.getSverity = function(){
  var random = Math.floor(Math.random() * 100);
  return random <= 33 ? 'error':(random <= 66?'waning':'info');
};
