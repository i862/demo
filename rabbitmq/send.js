#!/usr/bin/env node
var send = exports.send = function(conn, ch) {
  var q = 'hello';
  ch.assertQueue(q, {durable: false});
  ch.sendToQueue(q, new Buffer('Hello Amen'));
  console.log('[x] Send "Hello Amen"');
  setTimeout(function () {
    conn.close();
    process.exit(0);
  }, 500);
};
