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
var insertionSort = function(arr){
  var length = arr.length,
    i = 1;
  while (i < length){
    for(var j = i ; j > 0 && less(arr,j,j-1);j--){
      each(arr,j,j-1);
    }
    i++;
  }
};
test(insertionSort);
var reInsertionSort = function(arr){
  sort(arr,1,arr.length);
};
var sort = function(arr,index,length){
  if(index > length){
    return arr;
  }else{
    for(var j = index ; j > 0 && less(arr,j,j-1);j--){
      each(arr,j,j-1);
    }
    return sort(arr,++index,length);
  }
};
test(reInsertionSort);