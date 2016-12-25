#!/usr/bin/env node
var base = require('./base').base;
var work = exports.work = function(conn, ch){
  var q = 'task',
    str = '';
  console.log('[*] waiting for msg. To exit press CTRL+C');
  ch.assertQueue(q, {durable: true});
  ch.prefetch(1);
  ch.consume(q, function(msg){
    str = msg? msg.content.toString(): '';
    var secs = parseInt(str.split('.')[1] || '1') - 1;
    console.log('[x] recived %s', str);
    setTimeout(function(){
      console.log('[x] done');
      ch.ack(msg);
    }, secs * 1000);
  }, {noAck: false});

};
base(work);
