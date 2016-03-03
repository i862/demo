/**
 * Created by menzhongxin on 16/3/1.
 */
var path = require('path'),
    webpack = require('webpack'),
    nodemodulesPath = path.resolve(__dirname,'node_modules'),
    ExtractTextPlugin = require("extract-text-webpack-plugin");
var config = {
  entry:{
    main:'./script/main.js'
  },
  output:{
    path:__dirname + '/assets/js',
    publicPath: '/assets/js',
    filename:'[name].js'
  },
  module:{
    //preLoaders: [
    //  {
    //    test: /\.(js|jsx)$/,
    //    loader: 'eslint-loader',
    //    include: [path.resolve(__dirname, "script"),path.resolve(__dirname, "src")],
    //    exclude: [nodemodulesPath]
    //  },
    //],
    loaders:[
      {
        test: /\.(js|jsx)$/, //正则表达式匹配 .js 和 .jsx 文件
        loader: 'babel-loader',//对匹配的文件进行处理的loader
        exclude: [nodemodulesPath],//排除node module中的文件
        query: {
          presets: ['react','es2015']
        }
      },
      {
        test:/\.css$/,
        loader:ExtractTextPlugin.extract("style-loader", "css-loader"),
        exclude:[nodemodulesPath]
      },
      { test:/\.(png|woff|svg|ttf|eot)$/,loader:'url-loader?limit=10000'}
    ],
    resolve:{
      extensions:['','.js','.json']
    },
    plugins: [
      new webpack.optimize.CommonsChunkPlugin('common.js'),
      new ExtractTextPlugin("styles.css")
    ]
  }
};
module.exports = config;