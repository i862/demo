/**
 * Created by menzhongxin on 16/3/14.
 */
process.on('message',function(m){
  console.log('father msg:' + m);
});

process.send('bar');