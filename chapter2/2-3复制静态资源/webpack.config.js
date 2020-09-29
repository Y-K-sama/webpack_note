const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const copyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'development',
    output: {
        filename: '[name].[chunkhash:5].js'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'index.html'
        }),
        new copyWebpackPlugin({
            patterns: [
                { from: "./public", to: "./" }// to的相对文件是生成打包文件的目录
            ]
        })
    ]
}