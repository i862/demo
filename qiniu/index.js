/**
 * Created by menzhongxin on 2016/11/29.
 */
const qiniu = require('qiniu')
qiniu.conf.ACCESS_KEY = 'yXEl9khMWlzdIk7eFel38RWYvNF8Jhl0E6gQDOGF';
qiniu.conf.SECRET_KEY = 'aZA6N8gv3UuT1WDwfKF59njYW47q1d0bkiPi7N77';

const bucket = 'menzhongxin'

let key = '111'
//构建上传策略函数
function uptoken(bucket) {
  var putPolicy = new qiniu.rs.PutPolicy(bucket + ":111");
  return putPolicy.token();
}

//生成上传 Token
token = uptoken(bucket, key);

//要上传文件的本地路径
filePath = './2008319183523380_2.jpg'

//构造上传函数
function uploadFile(uptoken, key, localFile) {
  var extra = new qiniu.io.PutExtra();
  qiniu.io.putFile(uptoken, key, localFile, extra, function(err, ret) {
    if(!err) {
      // 上传成功， 处理返回值
      console.log(ret.hash, ret.key, ret.persistentId);
    } else {
      // 上传失败， 处理返回代码
      console.log(err);
    }
  });
}

//调用uploadFile上传
uploadFile(token, key, filePath);
