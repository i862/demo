/**
 * Created by menzhongxin on 2016/11/26.
 */
const _ = require('lodash')
const fs = require('fs')
const needDeal = ['base', 'widget', 'weui.wxss']
let isDir = name => fs.statSync(name).isDirectory()

let isWxss = name => /(\.wxss)$/i.test(name)

let isPx = name => /(\dpx)$/i.test(name)

let getNum = str => +str.split(':')[1].trim().slice(0, -2)
let dealDir = name => {
  "use strict";
  fs.readdir(name, (err, rs) => {
    _.each(rs, c => {
      "use strict";
      deal(name + '/' + c)
    })
  })
}
let dealFile = name => {
  "use strict";
  console.log(name)
  fs.readFile(name, {encoding: 'utf8'}, (err, rs) => {
    let temp = rs.split(';')
    let str
    _.each(temp, c => {

    })
    console.log(rs)
  })
}

let deal = name => {
  "use strict";
  isDir(name)? dealDir(name): isWxss(name)?dealFile(name):''
}

dealDir('../style')
