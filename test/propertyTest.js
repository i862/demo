/**
 * Created by menzhongxin on 16/8/5.
 */
var foo = {
  name: foo,
  hello: function(){

  },
  fly: function(){

  }
};

var bar = Object.create(foo);

var fn = function(){

};
fn.prototype.hello = function(){

};

var f = new fn();
var goodBye = function(){

};


console.log(typeof foo.prototype);
console.log(typeof bar.prototype);
console.log(typeof fn.prototype);
console.log(typeof f.prototype);
console.log(typeof goodBye.prototype);
console.log('---------------------------');
console.log(typeof foo.__proto__);
console.log(typeof bar.__proto__);
console.log(typeof fn.__proto__);
console.log(typeof f.__proto__);
console.log(typeof goodBye.__proto__);

console.log('--------------------------');
console.log(foo.prototype == Object.prototype);
console.log(bar.prototype == Object.prototype);
console.log(fn.prototype == Function.prototype);
console.log(f.prototype == Function.prototype);
console.log(goodBye.prototype == Function.prototype);
