#!/usr/bin/env node
/**
 * Created by menzhongxin on 16/8/21.
 */
var base = require('./base').base;
var client = function(conn, ch){
  ch.assertQueue('', {exclusive: true}, function(err, q){
    var corr = generateUUID()
    , args = process.argv.slice(2)
    , num = parseInt(args[0]);
    console.log('[x] requesting fib(%d)', num);
    ch.consume(q.queue, function(msg){
      if(msg.properties.correlationId == corr)
        console.log('[.] Got %s', msg.content.toString());
      setTimeout(function(){conn.close(); process.exit(0);}, 500);
    }, {noAck: true});
    ch.sendToQueue('rpc_queue', new Buffer(num.toString()),
      {correlationId: corr, replyTo: q.queue});
  });
};
var generateUUID = function(){
  return Math.random().toString() + Math.random().toString() + Math.random().toString();
};
base(client);
