/**
 * Created by menzhongxin on 16/7/27.
 */
var thunk = function(fn){
  return function (){
    var args = Array.prototype.slice.call(arguments);
    return function (cb){
      args.push(cb);
      return args.apply(this, fn);
    }
  }
};

var test = function(params, cb){
  return cb.call(params);
};

var Animal = function(name){
  this.name = name||'animal';
  //this.say = function(){
  //  console.log(this.name);
  //};
};
Animal.prototype.say = function(){
  //console.log(arguments[0]);
  console.log(this.name);
};
Animal.prototype.create = function(name){
  return new Animal(name);
};

var Cat = function(){
  this.name = 'cat';
};
var a = new Animal();
a.say();

var c = new Cat();
c.say = Animal.prototype.say.bind(c, [1, 3]);
c.create = Animal.prototype.create.bind(c);

c1 = c.create('cat1');
c1.say();
c.say();
a.say();


Animal.prototype.say.call(c);
Animal.prototype.say.apply(c);


var str = 'e e e e ';

var strslice = Array.prototype.slice;
//console.log(strslice.apply(str));
var slice = Function.prototype.apply.bind(strslice);
console.log(slice(str));
