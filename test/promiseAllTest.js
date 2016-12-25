/**
 * Created by menzhongxin on 16/5/31.
 */
var Promise = require('promise');

var promise = Promise.resolve(),
  promise1 = Promise.resolve(),
  promise2 = Promise.resolve();
Promise.all([promise,promise1,promise2])
.then(function(values) {
  console.log(values[0]);
  console.log(values[1]);
  console.log(values[2]);
  var key = values[2] && values[2].toObject() || null;
  console.log(key);
  return {a:3};
})
.then(function(data){
  console.log(data.a);
});


