/**
 * Created by menzhongxin on 16/5/20.
 */
var a = require('./a');
exports.getValue = function(){
  return 'b';
};
console.log('in b the module a.value is : ' + a.getValue());