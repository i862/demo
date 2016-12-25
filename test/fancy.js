/**
 * Created by menzhongxin on 16/5/5.
 */
var each = function(arr,i,j){
  var tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
};
var more = function(arr,i,j){
  return arr[i] > arr[j];
};
var less = function(arr,i,j){
  return arr[i] < arr[j];
};
var test = function(fn){
  var array = [1,11,2,7,9,3,4,5,10,8];
  fn(array);
  console.log(array);
};
var bubbleSort = function(arr){
  var len = arr.length;
  while(len > 0){
   for(var i = 0 ; i < len; i ++){
     if(more(arr,i,i+1)){
       each(arr,i,i+1);
     }
   }
    len--;
  }
};
test(bubbleSort);

var reBubbleSort = function(arr){
  sort(arr,arr.length);
};
var sort = function(arr,length){
  for(var i = 0 ; i < length; i ++){
    if(more(arr,i,i+1)){
      each(arr,i,i+1);
    }
  }
  if(length > 0)
    return sort(arr,length-1);
  else
    return arr;
};
test(reBubbleSort);
