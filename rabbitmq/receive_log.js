#!/usr/bin/env node
/**
 * Created by menzhongxin on 16/8/19.
 */
var base = require('./base').base;
var receive = exports.receive = function(conn, ch){
  var ex = 'logs';
  ch.assertExchange(ex, 'fanout', {durable: false});
  ch.assertQueue('', {exclusive: true}, function(err, q){
    console.log('[x] waiting for messages in %s . To exit press CTRL+C', q.queue);
    ch.bindQueue(q.queue, ex, '');
    ch.consume(q.queue, function(msg){
      console.log('[x] %s', msg.content.toString());
    }, {noAck: true});
  });
};
base(receive);
