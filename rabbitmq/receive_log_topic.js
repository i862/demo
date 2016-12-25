#!/usr/bin/env node
/**
 * Created by menzhongxin on 16/8/20.
 */
var base = require('./base').base;
var receive = exports.receive = function(conn, ch){
  var ex = 'topic_logs'
    , args = process.argv.slice(2);
  ch.assertExchange(ex, 'topic', {durable: false});
  ch.assertQueue('', {exclusive: true}, function(err, q){
    console.log('[x] waiting for logs, to exit press CTRL+C');
    args.forEach(function(key){
      ch.bindQueue(q.queue, ex, key);
    });
    ch.consume(q.queue, function(msg){
      console.log('[x] %s: %s', msg.fields.routingKey, msg.content.toString());
    }, {noAck: true});
  });
};
base(receive);
