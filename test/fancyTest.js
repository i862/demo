/**
 * Created by menzhongxin on 16/5/5.
 */
var util = require('util')
  ,EventEmitter = require('events').EventEmitter;

function Fancy(){
  EventEmitter.call(this);
};
Fancy.prototype.hello = function(name){
  this.emit('hello',name);
};
util.inherits(Fancy,EventEmitter);
exports.Fancy = Fancy();

