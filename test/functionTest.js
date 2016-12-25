/**
 * Created by menzhongxin on 2016/10/17.
 */
name = 'global';

function outer(){
  console.log(this.name);
  var name = 'outer';
  function inner(){
    console.log(this.name);
  }
  inner();
}
outer();


var myObj = {
  name: 'myObj'
};

myObj.getName = function(){
  console.log(this.name);
  function inner(){
    console.log(this.name);
  }
  inner();
};
myObj.getName();