// 公共配置

const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        list: './src/list/index.js',
        detail: './src/detail/index.js'
    },
    output: {
        filename:'scripts/[name].[chunkhash:5].js'
    },
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template:'./public/list.html',
            filename:'list.html',
            chunks:['list']
        }),
        new HtmlWebpackPlugin({
            template:'./public/detail.html',
            filename:'detail.html',
            chunks:['detail']
        })
    ]
}