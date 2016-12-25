/**
 * Created by menzhongxin on 16/3/14.
 */
var child = require('child_process').fork(__dirname + '/child.js');
var normal = require('child_process').fork(__dirname + '/child.js',['normal']);
var special = require('child_process').fork(__dirname + '/child.js',['special']);
var server = require('net').createServer();
server.on('connection',function(socket){
  if(socket.remoteAddress == '127.0.0.1'){
    special.send('socket',socket);
    return ;
  }
  normal.send('socket',socket);
});
server.listen(1340);


