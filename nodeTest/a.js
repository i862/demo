/**
 * Created by menzhongxin on 16/5/20.
 */

exports.getValue = function(){
  return 'a';
};
var b = require('./b');
console.log('in a the module b.value is : ' + b.getValue());

