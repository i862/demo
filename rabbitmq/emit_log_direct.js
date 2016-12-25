#!/usr/bin/env node
/**
 * Created by menzhongxin on 16/8/19.
 */
var base = require('./base');
var emit = exports.emit = function (conn, ch){
  var ex = 'direct_logs'
  , msg =  process.argv.slice(1).join(' ') || 'hello world'
  , severity = base.getSverity();
  ch.assertExchange(ex, 'direct', {durable: false});
  ch.publish(ex, severity, new Buffer(msg));
  console.log('[x] sent %s: \'%s\'', severity, msg);
  setTimeout(function(){
    conn.close();
    process.exit(0);
  }, 500);
};
base.base(emit);
