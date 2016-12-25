/**
 * Created by menzhongxin on 16/3/14.
 */
var buff = new Buffer([0,1,0,1,0,1,0,1]);
var buff2 = new Buffer(1024);
console.log(buff);
console.log(Buffer.isBuffer(buff));
console.log(Buffer.isEncoding('utf8'));
console.log(Buffer.isEncoding('utf9'));
console.log(buff.length);
console.log(buff2.length);
buff2.fill(256);
console.log(buff2.length);
buff2.write('hhahh');
console.log(buff2.length);
console.log(buff2);
var buff3 = new Buffer(256);
var len = buff3.write('\u00bd + \u00bc = \u00be',0);
console.log(len + ' test: ' + buff3.toString('utf8',0,len));
console.log(Buffer.byteLength('\u00bd + \u00bc = \u00be'));
//console.log(buff3.toJSON());
console.log('-----');

var bf1 = new Buffer(26);
var bf2 = new Buffer(26);
for(var i = 0 ; i < 26 ; i ++){
  bf1[i] = i + 97;
  bf2[i] = 33;
}
console.log(bf1.toString('ascii',0,25));
console.log(bf2.toString('ascii',0,25));
bf1.copy(bf2,0,3,8);
console.log(bf2.toString('ascii',0,25));

var bf3 = bf1.slice(0,3);
console.log(bf3.toString('ascii'));
bf1[0] = 33;
console.log(bf3.toString('ascii'));