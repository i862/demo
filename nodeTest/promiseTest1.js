/**
 * Created by menzhongxin on 16/5/20.
 */
var Promise = require('promise');

var u = {};
Promise.resolve({name:'resolve'})
  .then(function(data){
    u = data;
    console.log(data.name);
    return {name:'then1'};
  })
  .then(function(r){
    console.log(u.name);
    console.log(r.name);
  })
  .then(function(){
    var error = {
      message:'错误',
      code:'8000',
      httpCode:'404',
      detail:'这是一个错误'
    };
    throw error;
  })
  .catch(function(err){
  console.log(err.code);
});


console.log('---------------');
var a = 'aaa';
var b = a;
a = 'bbb';
console.log('a ' + a);
console.log('b ' + b);