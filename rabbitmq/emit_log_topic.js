#!/usr/bin/env node
/**
 * Created by menzhongxin on 16/8/20.
 */
var base = require('./base').base;
var emit = exports.emit = function(conn, ch){
  var ex = 'topic_logs'
  , args = process.argv.slice(2)
  , key = args.length > 0? args[0] : 'anonymous.info'
  , msg = args.slice(1).join(' ')|| 'hello world';
  ch.assertExchange(ex, 'topic', {durable: false});
  ch.publish(ex, key, new Buffer(msg));
  console.log('[x] sent %s : %s', key, msg);
  setTimeout(function(){
    conn.close();
    process.exit(0);
  }, 500);
};
base(emit);