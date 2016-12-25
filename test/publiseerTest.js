/**
 * Created by menzhongxin on 2016/10/12.
 */
var Publisher = function(){
  this.listener = {};
};
Publisher.prototype.addListener = function(obj){
  this.listener[obj.name] = obj;
};

Publisher.prototype.removeListener = function(obj){
  delete this.listener[obj.name];
};


Publisher.prototype.notify = function(msg){
  var k, v;
  for(k in this.listener){
    v = this.listener[k];
    if(v && v.process && typeof v.process === 'function'){
      v.process(msg);
    }
  }
};

var Subscribe = function(name){
  this.name = name;
};
Subscribe.prototype.process = function(msg){
  console.log(msg);
};

var sub1 = new Subscribe('sub1')
  ,sub2 = new Subscribe('sub2')
  , pub = new Publisher();
pub.addListener(sub1),pub.addListener(sub2);

pub.notify('amen');
pub.removeListener(sub1);
pub.notify('lucy');
