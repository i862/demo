/**
 * Created by menzhongxin on 16/3/14.
 */
var cp = require('child_process');
var n = cp.fork(__dirname + '/suba.js');
n.on('message',function(m){
  console.log('the child msg is :' + m);
});
n.send('world');