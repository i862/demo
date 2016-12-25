/**
 * Created by menzhongxin on 16/8/17.
 */
var amqp = require('amqplib/callback_api')
  , send = require('./send').send
  , receive = require('./receive').receive
  , task1 = require('./task').task
  , work = require('./work').work;
var dealErr = function(err){
  console.log(err);
};
var cc = function(conn, task){
  conn.createChannel(function (err, ch) {
    err? dealErr(err):task(conn, ch);
  });
};
var base = function(task) {
  amqp.connect('amqp://amen:amen@115.28.45.182:5672', function (err, conn) {
    err?dealErr(err):cc(conn, task);
  });
};

//base(send);
//base(receive);
base(task1);
base(work);
