/**
 * Created by menzhongxin on 16/7/10.
 */
function line(){
  console.log('----------------------------------------');
}
function *f(){
  for(var i=0; true; i++){
    var reset = yield i;
    if(reset){
      yield -1;
    }
  }
}

var g = f();
console.log(g.next());
console.log(g.next());
console.log(g.next(true));
line();
function *foo(x){
  var y = yield 2 * ( yield (x + 1));//24
  var z = yield (y/3);//8//3
  return (x + y + z);
}

var a = foo(5);
console.log(a.next());
console.log(a.next());
console.log(a.next());
line();
var b = foo(5);
console.log(b.next());
console.log(b.next(12));
console.log(b.next(3));
console.log(b.next(0));