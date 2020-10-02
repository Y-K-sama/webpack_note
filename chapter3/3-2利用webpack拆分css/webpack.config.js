module.exports = {
    mode: 'development',
    module: {
        rules: [
            // css-loader将css文件转换为字符串输出, style-loader与css-loader结合生成一个包含css-loader导出字符串的style标签插入到html文件中
            { test: /\.css$/, use: ['style-loader','css-loader'] }, // 多个loader会先执行左侧的loader然后将结果交给下一个执行
            { test: /\.(png)|(jpg)|(gif)$/, use: 'file-loader' }
        ]
    }
}