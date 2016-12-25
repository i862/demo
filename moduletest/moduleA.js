/**
 * Created by menzhongxin on 16/7/17.
 */
var moduleA = function(){};
  var a = new moduleA();
  module.exports = a;
  var moduleB = require('./moduleB');

  moduleA.prototype.getName = function(){
    return 'moduleA';
  };

  moduleA.prototype.say = function(){
    console.log('a:modulea');
    console.log('b:' + moduleb.getname());
    moduleb.say();
  };
a.say();
