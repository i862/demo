/**
 * Created by menzhongxin on 16/5/20.
 */
var Promise = require('promise');


//Promise.resolve('foo')
//  .then(function(){
//    return Promise.resolve('bar');
//  })
//  .then(function(rs){
//    console.log(rs);
//  });

console.log('---------');
var count = 1;
var doSomeThing = function(){
  count ++;
  console.log('this is doSomeThing: ' + count);
  return Promise.resolve('first');
};
var doSomeThingElse = function(data){
  var key = data||count;
  console.log('this is doSomeTingElse: ' + key);
  return Promise.resolve('elseMd');
};
var finalHandler = function(data){
  var key = data||count;
  console.log('this is finalHandler: ' + key);
};
doSomeThing()
  .then(doSomeThingElse)
  .then(finalHandler);
console.log();
Promise.resolve('3')
  .then(function(data){
    console.log(data);
  });

var test = function(){
  return Promise.resolve(function(){
    return '3';
  })};
test().then(function(data){
  data();
});
