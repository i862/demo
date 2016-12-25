/**
 * Created by menzhongxin on 2016/11/1.
 */

function f(){ console.log('I am out side');}

(function (){
  if(false){
    function f(){
      console.log('I am in side');
    }
  }
}());

const PI = 3.1415926;
const codes = [];
codes.push('123');
const keys = Object.freeze([1, 5, 9]);
const person = Object.freeze({age: 3});
console.log(person.age);
console.log(keys);
person.age = 4;
console.log(person.age);
