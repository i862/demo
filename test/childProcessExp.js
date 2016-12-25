/**
 * Created by menzhongxin on 16/3/14.
 */
var spawn = require('child_process').spawn;
var grep = spawn('grep',['ssh']);
grep.on('close',function(code,signal){
  console.log('child process terminated due to receipt of signal ' + signal);
});
grep.on('exit',function(code,signal){
  console.log('-----R');
  console.log(code + ' ' + signal);
});
grep.on('close',function(){
  console.log('-----'+arguments[1]);
});

grep.kill('SIGHUP');