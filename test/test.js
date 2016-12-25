/**
 * Created by menzhongxin on 16/5/5.
 */
var demo = function(params){
  var result;
  return function (){
    result = result||{key:'e'};
    return result;
  };
}();
console.log(demo('eee'));
console.log(demo('ffff'));