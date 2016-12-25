#!/usr/bin/env node
var base = require('./base').base;
var task = exports.task = function(conn, ch){
  var q = 'task';
  var msg = process.argv.slice(2).join(' ') || 'hello world1';
  ch.assertQueue(q, {durable: true});
  ch.sendToQueue(q, new Buffer(msg), {persisent: true});
  console.log('[x] send to %s', msg);
  setTimeout(function(){
    conn.close();
    process.exit(0);
  }, 500);
};
base(task);
