// clean-webpack-plugin插件，使用npm安装，在生成最终打包文件之前clean-webpack-plugin会先将生成目录下的文件删除
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    output:{
        filename:'[name].[chunkhash:6].js'
    },
    plugins:[
        new CleanWebpackPlugin()
    ]
}