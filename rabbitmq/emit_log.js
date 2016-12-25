#!/usr/bin/env node
/**
 * Created by menzhongxin on 16/8/19.
 */
var base = require('./base').base;
var emit = exports.emitLog = function(conn, ch){
  var ex = 'logs';
  var msg = process.argv.slice(2).join(' ') || 'hello world';
  ch.assertExchange(ex, 'fanout', {durable: false});
  ch.publish(ex, '', new Buffer(msg));
  console.log('[x] send %s ', msg);
  setTimeout(function(){conn.close();process.exit(0)}, 500);
};
base(emit);