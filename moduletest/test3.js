/**
 * Created by menzhongxin on 16/5/7.
 */
var t1 = require('./test1')
,t2 = require('./test2');


//t1.test();
//t2.test();
//t1.test();
var person = function(n){
  this.name = '3';
};
person.name2 = 'amen2';
person.prototype.name1 = 'amen';
person.setName = function(){
  this.name1 = arguments[0];
};
var woman =function(n){

};
woman.prototype = person;

var w = new woman('1');
w.setName('lucy');
console.log(w.name1);
console.log(w.name);
console.log(w.name2);
