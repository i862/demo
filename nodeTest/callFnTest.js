/**
 * Created by menzhongxin on 16/5/20.
 */
function sayHello(firstName,lastName){
  console.log('hi ' + firstName||'' + ' ' + lastName||'');
}

var rookie = {};
sayHello.call(rookie,['men','zhongxin']);
var test = sayHello.bind(rookie,['men']);
test('zhonxin');


var DynamicMd = function(){
  this.md = {};
};
dynamicMd = new DynamicMd();
dynamicMd.sayHello = function(){
  console.log('this is hello md');
};
dynamicMd.md['.abb'] = function(){
  console.log('this is abb md');
};
dynamicMd.md['.abc'] = function(){
  console.log('this is abc md');
};

dynamicMd.md['.abb']();
dynamicMd[''+'sayHello']();
