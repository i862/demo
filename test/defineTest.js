/**
 * Created by menzhongxin on 16/7/6.
 */
var Observer = function(value){
  var walk = function(value){
    var keys = Object.keys(value);
    keys.forEach(function(key){
      covert(key,value[key]);
    });
  };
  var covert = function(key,val){
    defineReactive(value,key,val);
  };
  walk(value);
  return value;
};

var defineReactive = function(obj,key,val){
  var dep = new Dep();
  var child = Observer(val);
  Object.defineProperty(obj,key,{
    enumerable:true,
    configurable:true,
    set:function(newVal){
      var value = val;
      if(value === newVal){
        return;
      }
      child = Observer(newVal);
      dep.notify();
    },
    get:function(){
      return child;
    }
  });
};



var Dep = function(){
  this.sub = [];
  this.addSub = function(sub){
    this.sub.push(sub);
  };
  this.notify = function(){
    this.sub.forEach(function(current){
      current.update();
    });
  };
};
/********/
var test = {
  a:{
    ax:3,
    ae:4
  },
  b:{
    bx:12,
    be:13
  }
};

var test1 = new Observer(test);
