/**
 * Created by menzhongxin on 2016/10/8.
 */
var method = function(fn, value){
  return fn(value);
};

var method1 = function(value){
  console.log('this is params fn: ' + value);
  return function (name){
    console.log(name);
  };
};

//exports.default = (0, method)(method1);
//exports.default = method(method1);
(0, method)(method1, 'amen')('lucy');
