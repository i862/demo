/**
 * Created by menzhongxin on 16/6/24.
 */
var storage = {
  status:1,
  type:'object'
};
var another_storage = Object.create(storage);
for(var key in another_storage){
  if(another_storage.hasOwnProperty(key))
    console.log(key + ' : ' + another_storage[key]);
}
