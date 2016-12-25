/**
 * Created by menzhongxin on 16/7/12.
 */

Function.prototype.method = function(name, fn){
  if(this.prototype[name])
    throw new Error('The method \"' + name + '\" already exists. if you realy want to overwrite this method please use "rewriteMethod"');
  this.prototype[name] = fn;
  return this;
};
Function.prototype.rewriteMethod = function(name, fn){
  this.prototype[name] = fn;
  return this;
};
var test = function(){
  this.testName = 'testhhhh';
};
test
  .method('getName', function(){
  console.log(this.testName);
})
  .rewriteMethod('getName', function(){
    console.log(this.testName + 'nihao');
});
new test().getName();
