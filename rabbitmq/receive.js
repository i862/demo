/**
 * Created by menzhongxin on 16/8/17.
 */
var receive = exports.receive = function(conn, ch) {
  var q = 'hello';
  ch.assertQueue(q, {durable: false});
  console.log('[*] waiting for message in %s. to exit press CTRL+C', q);
  ch.consume(q, function (msg) {
    console.log('[*] receive is %s', msg ? msg.content.toString() : '');
  }, {noAck: true});
};
