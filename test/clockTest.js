/**
 * Created by menzhongxin on 16/7/14.
 */
var ticking = true;

var clock = function(){
  if(ticking)
    console.log('tick');
  else
    console.log('tock');
  ticking = !ticking;
};

//while (true){
//  clock();
//};

var gClock = (function *(){
  while (true){
    console.log('tick');
    yield ;
    console.log('tock');
    yield ;
  }
})();

//
//while (true){
//  gClock.next();
//}
function step(value){
  console.log(value||'start');
}

function* longRunningTask(){
  try{
    var v1 = yield step();
    var v2 = yield step(v1);
    var v3 = yield step(v2);
    var v4 = yield step(v3);
  }catch (e){

  }
}
function scheduler(task){
  setTimeout(function(){
    var taskObj = task.next(task.value);
    if(!taskObj.done){
      task.value = taskObj.value;
      scheduler(taskObj);
    }
  }, 0);
}

scheduler(longRunningTask());