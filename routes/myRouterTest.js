/**
 * Created by menzhongxin on 2016/10/12.
 */
var router = require('router');
var myRouter = function(){

};

myRouter.prototype.get = function(url, fn, options){
  var method = function(req, res){
    for(fn in options.before){

    };
    fn(req, res);
  };
  router.get(url, fn);
};
module.exports = new myRouter();
