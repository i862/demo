/**
 * Created by menzhongxin on 16/8/3.
 */

//var hello = function(){
//  console.log(this.name);
//};
//var demo = {
//  name: 'demo'
//};
//var h = hello.bind(demo);
//h(); // out 'demo'

//
//name = 'global';
//var hello = function(){
//  console.log(this.name);
//};
//var h = hello.bind();
//h(); // out 'global';
//
//var hello = function(job, name){
//  console.log('hello, my job is ' + job + ', my name is ' + name);
//};
//
//var h = hello.bind(undefined, 'coder');
//h('Tom'); // hello, my job is coder, my name is Tom
//
//var fly = function(){
//  //fly
//  console.log('I am a ' + this.name + ', I can fly');
//};
//
//var bird = {
//  name: 'bird'
//};
//var plane = {
//  name: 'plane'
//};
//
//fly.bind(bird)(); //I am a bird, I can fly
//fly.bind(plane)();//I am a plane, I can fly




var bind = Function.prototype.call.bind(Function.prototype.bind);

var hello = function(){
  console.log(this.name);
};
var boo = {
  name: 'boo'
};
//
//bind(hello, boo)();

//bind = Function.prototype.call.bind(Function.prototype.bind);
//bind(hello, boo) == Function.prototype.bind.call(hello, boo);

//Function.prototype.bind.call(hello, boo) == hello.bind(boo);
//bind = Function.prototype.call.bind(Function.prototype.bind) == Function.prototype.bind.call;
//bind(hello, boo) == Function.prototype.bind.call(hello, boo) == hello.bind(boo);

var Father = function(){

};

Father.prototype.hello = function(){

};
Father.prototype.say = function(){};

var f = new Father();
console.log(typeof Father.prototype);
if (true) {
  Function.prototype.bind = function (oThis) {
    if (typeof this !== "function") {
      // closest thing possible to the ECMAScript 5
      // internal IsCallable function
      throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
    }

    var aArgs = Array.prototype.slice.call(arguments, 1);
    var fToBind = this;
    var fNOP = function () {};
    var fBound = function () {
        return fToBind.apply(this instanceof fNOP
            ? this
            : oThis || this,
          aArgs.concat(Array.prototype.slice.call(arguments)));
      };

    fNOP.prototype = this.prototype;
    fBound.prototype = new fNOP();

    return fBound;
  };
}

//hello.bind();
hello.bind(boo, [1, 3, 3]);