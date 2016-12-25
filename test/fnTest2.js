/**
 * Created by menzhongxin on 2016/10/8.
 */
//var test = require('./fnTest');
var Thenjs = require('thenjs');
function task(args, cb){
  Thenjs.nextTick(function(){
    cb(null, args);
  });
};
Thenjs(function(cont){
  task(10, cont);
}).then(function(cont, arg){
  console.log(arg);
  cont(new Error(123));
}).fail(function(cont, err){
  console.log(err);
});