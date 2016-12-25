/**
 * Created by menzhongxin on 16/5/7.
 */
exports.name;
exports.getName = function(){
  return this.name;
};
exports.setName = function(){
  this.name = arguments[0]||'';
};