#!/usr/bin/env node
/**
 * Created by menzhongxin on 16/8/19.
 */
var base = require('./base').base;
var args = process.argv.slice(2);

if(args.length < 0){
  console.log('Usage: receive_log_direct.js [info] [warning] [error]');
  process.exit(0);
}
var receive = exports.receive = function(conn, ch){
  var ex = 'direct_logs'
  , args = process.argv.slice(2);
  ch.assertExchange(ex, 'direct', {durable: false});
  ch.assertQueue('', {exclusive: true}, function(err, q){
    console.log('[*] waiting for logs $s. To exit press CTRL+C', args);
    args.forEach(function(severity){
      ch.bindQueue(q.queue, ex, severity);
    });
    ch.consume(q.queue, function(msg){
      console.log('[x] %s : \' %s\'', msg.fields.routingKey, msg.content.toString());
    }, {noAck: true});
  });
};
base(receive);