/**
 * Created by menzhongxin on 16/3/15.
 */
var spwan = require('child_process').spawn;
var ls = spwan('ls',['-lh','/usr']);
ls.stdout.on('data',function(data){
  console.log(data.toString('utf8',0,data.length));
});
ls.stderr.on('data',function(data){
  console.log(data.toString('utf8',0,data.length));
});
ls.on('close',function(code){
  console.log('the code is :'+code);
});
var ps = spwan('ps',['ax']);
var grep = spwan('grep',['ssh']);
ps.stdout.on('data',function(data){
  console.log(data.toString('utf8',0,data.length));
});
ps.stderr.on('data',function(){
  console.log(data.toString('utf8',0,data.length));
});
ps.on('close',function(code){
  if(code !== 0)
    console.log('the code is : ' +code);
  grep.stdin.end();
});

grep.stdout.on('data',(data)=>{
  console.log(data.toString('utf8',0,data.length));
});
grep.stderr.on('data',(data)=>{
  console.log(data.toString('utf8',0,data.length));
});
grep.on('close',(code)=>{
  console.log('the grep close code is:' + code);
});

