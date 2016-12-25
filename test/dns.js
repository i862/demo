/**
 * Created by menzhongxin on 16/3/16.
 */
var dns = require('dns');
dns.lookup('doctorpda.cn',(err,address,family)=>{
  console.log(address);
  console.log('---------------');
  console.log(family);
});
dns.resolve4('doctorpda.cn',(err,address)=>{
  console.log(err);
  console.log(address);
});