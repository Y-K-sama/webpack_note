const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'development',
    output: {
        filename: 'js/[name].[chunkhash:5].js'
    },
    entry:{
        index: './src/js/index.js'
    },
    module: {
        rules: [
            {
                test: /\.(png)|(jpg)|(gif)$/,
                use: ['url-loader']
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'html/index.html'
        })
    ]
}