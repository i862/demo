/**
 * Created by menzhongxin on 16/3/15.
 */
//var exec = require('child_process').exec;
//var child = exec('cat *.js bad_file | wc -l',(err,stdout,stderr)=>{
//  if(err)
//    console.log(err);
//  console.log('--------------stdout-------------');
//  console.log(stdout);
//  //console.log(stdout.toString('utf8',0,stdout.length));
//  console.log('--------------stderr-------------');
//  console.log(stderr);
//  //console.log(stderr.toString('utf8',0,stderr.length));
//});

var execFile = require('child_process').execFile;
var child = execFile(__dirname + '/autoPull.sh',(err,stdout,stderr)=>{
  if(err)
    throw err;
  console.log('--------------stdout-------------');
  console.log(stdout);
  //console.log(stdout.toString('utf8',0,stdout.length));
  console.log('--------------stderr-------------');
  console.log(stderr);
  //console.log(stderr.toString('utf8',0,stderr.length));
});