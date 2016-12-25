/**
 * Created by menzhongxin on 16/8/29.
 */
var image = require('images')
  ,fs =require('fs')
  , Canvas = require('canvas')
  , Image = Canvas.Image
  , canvas = new Canvas(200, 200)
  , ctx = canvas.getContext('2d')
  , stream = canvas.pngStream();
var er_code_img = 'https://cli.im/api/qrcode/code?text=//cli.im&mhid=4ECVXgG9z5ghMHorI9Y';
var base_url = '.././imgs/'
, bg = base_url + 'bg.png'
, icon = base_url + 'btn_tel.png'
, er_code = base_url + 'er_code.png'
, out = fs.createWriteStream( base_url + 'text.png')
, logo = base_url + 'logo.png';


//image(bg)
//.draw(image(er_code).size(222), 496, 182)
//.draw('amen', 3, 5)
//.save(base_url + 'test1.jpg', {quality: 50});
//fs.readFile(base_url + 'test1.jpg', function(err, squid){
//  if (err) throw err;
//
//});
//var te = ctx.measureText('Awesome!');
//ctx.strokeStyle = 'rgba(0,0,0,0.5)';
//ctx.beginPath();
//ctx.lineTo(50, 20);
////ctx.lineTo(te.width, 102);
//ctx.stroke();
//stream.on('data', function(chunk){
//  out.write(chunk);
//});
//
//stream.on('end', function(){
//  console.log('saved png');
//});
var er_code = 'http://7xwfcm.com2.z0.glb.qiniucdn.com/test/1472439017.png';

var bg = 'http://7xwfcm.com2.z0.glb.qiniucdn.com/test/bg.png/1/image/';

var icon = 'http://7xwfcm.com2.z0.glb.qiniucdn.com/test/businesscard_btn_tel.png';

var str = new Buffer(er_code);
console.log(str.toString('base64'));