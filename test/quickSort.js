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
var quickSort = function(arr){
  sort(arr,0,arr.length-1);
};
var sort = function(arr,l,h){
  if(l > h)
    return;
  var mid = getMid(arr,l,h);
  sort(arr,l,mid-1);
  sort(arr,mid+1,h);
};
var getMid = function(arr,l,h){
  var tag = arr[l],
    i = l,
    j = h + 1;
  while(true){
    while(arr[++i] < tag){
      if(i == h) break;
    }
    while (arr[--j] > tag){
      if(j == l) break;
    }
    if(i >= j)break;
    each(arr,i,j);
  }
  each(arr,l,j);
  return j;
};
test(quickSort);