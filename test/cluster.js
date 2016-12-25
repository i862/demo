/**
 * Created by menzhongxin on 16/3/15.
 */
var cluster = require('cluster');
var http = require('http');
var cpuNum = require('os').cpus().length;
cluster.schedulingPolicy = cluster.SCHED_NONE;
if(cluster.isMaster){
  console.log('cpuNum:'+cpuNum);
  for(var i = 0; i < cpuNum; i ++){
    cluster.fork({NODE_ID:"child_"+i});
  }
  cluster.on('exit',(worker,code,signal)=>{
    console.log('worker'+worker.process.pid);
  });
  cluster.on('online',(worker)=>{
    console.log(worker);
  });
  cluster.on('listening',(worker,address)=>{
    console.log('listening:address:'+address.address + ' port:'+address.port);
  });
}else{
  console.log('this is a child ');
  http.createServer((req,res)=>{
    res.writeHead(200);
    res.end('hello world\n'+process.env.NODE_ID);
  }).listen(1341);
}

