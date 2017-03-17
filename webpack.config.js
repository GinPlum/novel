var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin =  require('html-webpack-plugin');
var OpenBrowserWebpackPlugin  = require('open-browser-webpack-plugin');
var ExtractTextWebpackPlugin = require("extract-text-webpack-plugin");//抽离样式 css文件
module.exports = {
    entry:["babel-polyfill","./src/scripts/index"],
    devtool:"source-map",
    output:{
        path:path.resolve(__dirname,"dist"),
        filename:"js/[name].[hash:8].js",   //以文件内容的MD5加密 生成的哈希名称的值 防止缓存
        publicPath:"/",   //生成html 自动引用路径   publicPath
    },
    module: {   //模块声明加载方式 js/ css /jpg
         rules:[
             {
                 test:/\.js[x]?$/,
                 use:["babel-loader"],
                 exclude:[path.resolve(__dirname,'node_modules')]
             },
             {
                 test:/\.(css|scss)$/,
                 use:ExtractTextWebpackPlugin.extract({ 
                     fallback:"style-loader", //转成node风格的代码
                     use:["css-loader",{ //css-loader 打包为js模块
                         loader:"postcss-loader",
                         options:{
                             plugins:function(){
                                 return [
                                     require("cssgrace"),
                                     require("postcss-px2rem")({remUnit:144}),
                                     require("autoprefixer")(),
                                 ]
                             }
                         }
                     },"sass-loader"]
                 })
             },
             {
                 test:/\.(gif|jpg|png|woff|woff2|svg|eot|ttf|mp4)\??.*$/,
                 use:["url-loader?limit=8192&name=font/[hash:8].[name].[ext]"]
             },
         ]
    },
    devServer:{ //配置服务器 webpack-dev-server
        contentBase:path.join(__dirname,"dist"),  //服务器目录
        compress:true,
        hot:true,  //true 自动刷新
        host:"0.0.0.0",
        port:3000,
        publicPath:"/",
        historyApiFallback: true,
        disableHostCheck: true,
    },
    plugins:[
        new OpenBrowserWebpackPlugin({url:"http://localhost:3000"}),
        new HtmlWebpackPlugin({
             template:'./src/index.html',
             inject:true   //自动注入 js/css
        }),
        new ExtractTextWebpackPlugin({
            filename:"css/app.[hash].css",
            allChunks:true,
            disable:false
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
}