/**
 * Created by menzhongxin on 16/3/14.
 */
process.on('message',function(msg,socket){
      socket.end('handle by child & env:' + process.argv[2]);
});