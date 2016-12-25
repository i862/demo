/**
 * Created by menzhongxin on 16/7/17.
 */
var moduleA = require('./moduleA');

var moduleB = function(){};
moduleB.prototype.getName = function(){
  return 'moduleB';
};
moduleB.prototype.say = function(){
  console.log('a:' + moduleA.getName());
  console.log('b:moduleb');
};
var b = new moduleB();
module.exports = b;