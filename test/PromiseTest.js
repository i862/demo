/**
 * Created by menzhongxin on 2016/10/12.
 */
var Promise = require('promise');

var test = function(){
  return Promise.resolve('amen');
};
var asyncTest = function(){
  setTimeout(function(){
    return 'name';
  }, 0);
};
//Promise.all([test(), asyncTest()])
//.then(function(values){
//  console.log(values[0]);
//  console.log(values[1]);
//});

var Persion = {
  name: 'amen',
  sayName: function (){
    console.log(this.name);
  }
};
Persion.age = 3;
var persion = Object.create(Persion);
persion.sayName();
persion.sex = '男';
console.log('Persion sex: ' + Persion.sex);
console.log('persion sex: ' + persion.sex);
console.log('Persion age: ' + Persion.age);
console.log('persion age: ' + persion.age);