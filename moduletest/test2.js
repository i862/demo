/**
 * Created by menzhongxin on 16/5/7.
 */
var et = require('./exportsTest')
,mt = require('./moduleTest');
mt = new mt();

exports.test = function(){
  console.log('----------export test2--------------');
  console.log(et.getName());
  et.setName('amen1');
  console.log(et.getName());
  console.log('----------module test2--------------');
  console.log(mt.getName());
  mt.setName('lucy1');
  console.log(mt.getName());
};