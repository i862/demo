/**
 * Created by menzhongxin on 16/5/9.
 */
var http = require('http');

var server = http.createServer(function(req,res){
  var ik = req.params.id;
  res.send('ok');
});
server.listen('8081');