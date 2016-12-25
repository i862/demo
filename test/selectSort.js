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
var selectionSort = function(arr){
  var length = arr.length,
    i = 0;
  while (i < length){
    for(var j = i ; j < length; j++){
      if(less(arr,j,i))
        each(arr,j,i);
    }
    i ++;
  }
};
test(selectionSort);
var reSelectionSort = function(arr){
  sort(arr,0,arr.length);
};
var sort = function(arr,index,length){
  if(index > length){
    return arr;

  }else{
    for(var j = index ; j < length; j++){
      if(less(arr,j,index))
        each(arr,j,index);
    }
    return sort(arr,index+1,length);
  }
};
test(reSelectionSort);