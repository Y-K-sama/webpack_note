const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: 'development', // 开发环境
    devtool: 'source-map',
    output: {
        filename: '[name].[chunkhash:6].js'
    },
    entry: {
        index: './src/index.js',
        a: './src/a.js'
    },
    plugins: [
        // 在打包文件生成前将生成目录下的文件删除
        new CleanWebpackPlugin(),
        // 在打包文件夹下生成一个html文件，默认的是一个普通的html文件，将所有打包好的代码引入，可以通过传参来改变配置
        new HtmlWebpackPlugin({
            template: './public/index.html', // 生成的html文件的模板文件地址
            chunks: ['index'], // 需要导入的js文件名
            filename: 'test.html' // 生成文件的名字
        }),
        // 当需要生成多个文件时，就多new几个
        new HtmlWebpackPlugin({
            template: './public/index.html', // 生成的html文件的模板文件地址
            chunks: ['a'], // 需要导入的js文件名
            filename: 'a.html' // 生成文件的名字
        })
    ]
}