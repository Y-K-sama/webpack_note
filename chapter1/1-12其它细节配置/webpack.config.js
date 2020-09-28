const path = require('path');
module.exports = {
    mode: 'development',//开发环境
    entry: {
        // 入口配置， 属性名为chunk名 值为入口文件路径
        index: './index.js',
        a: './a.js'
    },
    // path 是node内置的一个对象，resolve函数用来将多个字符串生成一个路径，__dirname无论什么时候都代表本js文件所在的目录
    context: path.resolve(__dirname, 'src'), // 值为一个绝对路径，代表配置文件中'./'相对的文件夹目录
    target: 'web', //打包好的文件的运行环境，默认值为web，另一个值为node
    module: {
        noParse:/a\.js/, // 匹配正则表达式，不对a模块做任何处理，直接将代码放置到模块内容中
    }
}