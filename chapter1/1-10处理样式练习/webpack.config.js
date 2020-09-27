module.exports = {
    mode: 'development',
    module: {
        // 一些规则, 每个规则用一个对象表示
        rules:[
            {
                test: /\.css$/, //匹配所有index.css 文件 或者这样写 /\.css/ 匹配所有.css文件
                use: [
                    {
                        loader:'./loaders/css-loader'
                    }
                ]// 表示匹配的文件使用哪些加载器(loader)
            }
        ]
    }
}