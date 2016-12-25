/**
 * Created by menzhongxin on 2016/11/1.
 */
let [a, b, c] = [1, 2, 3];
console.log(a);
console.log(b);
console.log(c);
function *fibs(){
  "use strict";
  let a = 1,
    b = 2;
  while(true){
    yield a;
    [a, b] = [b, a + b];
  }
};

var [first, second, third, fourth, fifth, sixth] = fibs();
console.log('first= %s, second= %s, third = %s, fourth = %s, sixth = %s', first, second, third, fourth, sixth);

function add([x, y]){
  return x + y;
}
console.log(add([1, 3]));
[[1, 2], [3, 4]].map(([a, b]) => console.log(a + b));