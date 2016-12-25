#!/usr/bin/env node
/**
 * Created by menzhongxin on 16/8/21.
 */
var base = require('./base').base;
var server = function(conn, ch){
  var q = 'rpc_queue';
  ch.assertQueue(q, {durable: false});
  ch.prefetch(1);
  console.log('[x] waiting for rpc requests');
  ch.consume(q, function reply(msg){
    var n = parseInt(msg.content.toString());
    console.log('[.] fib(%d)', n);
    var r = fibonacci(n);
    ch.sendToQueue(msg.properties.replyTo, new Buffer(r.toString()),
      {correlationId: msg.properties.correlationId});
    ch.ack(msg);
  });
};
var fibonacci = function(n){
  if(n ==0 || n == 1)
    return n;
  else
    return fibonacci(n -1 ) + fibonacci(n - 2);
};
base(server);
