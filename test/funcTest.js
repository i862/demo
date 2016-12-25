/**
 * Created by menzhongxin on 16/5/3.
 */

this.a = 3;
var test = function(){
  this.a = 4;
  var func = function(){
    this.a = 5;
    console.log(this.a);
    return this.a;
  };
  console.log(func());
};
test();