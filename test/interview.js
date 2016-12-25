/**
 * Created by menzhongxin on 16/5/5.
 */
var bubbleSort = function(arr){
  var len = arr.length
  ,i
  ,temp;
  while(len > 0){
    for(i=0;i < len-1;i++){
      if(arr[i] > arr[i+1]){
        temp = arr[i+1];
        arr[i+1] = arr[i];
        arr[i] = temp;
      }
    }
    len-- ;
  }
  return arr;
};

var reBubbleSort = function(arr,index){
  if(index > 0){
    var tmp;
    for(var i = 0 ;i < index-1; i ++){
      if(arr[i] > arr[i+1]){
        tmp = arr[i];
        arr[i+1] = arr[i];
        arr[i] = tmp;
      }
    }
    index --;
    return reBubbleSort(arr,index);
  }else{
    return arr;
  }
};


var recursionSort = function(arr){
  return reBubbleSort(arr,arr.length)
};
var array = [1,1,2,7,9,3,4,5,10,8];
console.log(bubbleSort(array));
console.log(recursionSort(array));

//
//var quickSort = function(arr){
//  var len = arr.length,
//    tag = arr[0],
//    i,j,tmp;
//  for(i = 1, j = len-1; i >= j; i++,j--){
//    if(arr[i] > tag){
//      tmp = arr[i];
//      arr[i] = tag;
//      tag = tmp;
//    }
//    if(arr[j] < tag){
//      tmp = arr[j];
//      arr[j] = tag;
//      tag = arr[j];
//    }
//  }
//  return arr;
//};
//var recursionQuickSort = function(arr,i,j,tag){
//  if(i > j){
//    return arr;
//  }else{
//    var tmp;
//    if(arr[j] < tag){
//      tmp = arr[j];
//      arr[j] = tag;
//      tag = tmp;
//    }
//    if(arr[i] > tag){
//      tmp = arr[i];
//      arr[i] = tag;
//      tag = tmp;
//    }
//
//    i++;
//    j--;
//    return recursionQuickSort(arr,i,j,tag);
//  }
//};
//var quickSortAdapter = function(arr){
//  return recursionQuickSort(arr,1,arr.length-1,arr[Math.ceil(arr.length/2)]);
//};
//console.log('--------quicksort--------');
//var array2 = [1,1,2,7,9,3,4,5,10,8];
//var array3 = [1,1,2,7,9,3,4,5,10,8];

//console.log(quickSort(array2));
//console.log(quickSortAdapter(array3));

var quick = function(arr){

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

var each = function(arr,i,j){
  var tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
};

var quickSort = function(arr){
  sort(arr,0,arr.length-1);
}
var array1 = [4,5,2,10,23,1,1,2,7,9,3,4,5];
console.log('=====');
quickSort(array1);
console.log(array1);

var arrayrr = [1,2,3,4,5,6,7,8,9];

var binarySearch = function(arr,k,l,h){
  if(l > h)
    return -1;
  var mid = l + Math.ceil((h-l)/2);
  if(k == arr[mid])
    return mid;
  if(k == arr[l])
    return l;
  if(k == arr[h])
    return h;
  if(k > arr[mid])
    return binarySearch(arr,k,mid+1,h);
  if(k < arr[mid])
    return binarySearch(arr,k,l,mid-1);
};

console.log(binarySearch(arrayrr,0,0,arrayrr.length-1));
