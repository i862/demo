/**
 * Created by menzhongxin on 16/5/7.
 */


var Person = function(){
  var name;
};

Person.prototype.setName = function(){
  this.name = arguments[0]||'';
};
Person.prototype.getName = function(){
  return this.name;
};
module.exports = Person;