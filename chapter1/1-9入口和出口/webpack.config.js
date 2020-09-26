const path = require('path');
module.exports = {
    mode: 'development',
    // 入口配置
    entry: {
        // 入口文件默认src/index.js; 入口文件可以有多个
        main: //属性名表示chunk名称， 属性值表示： 入口模块(启动模块)
            // 一个属性可以对应多个入口模块，这样就可以只生成一个js文件
    },
    // 出口配置
    output:{
        path: path.resolve(__dirname, 'test'),// 必须配置一个绝对路径，表示资源放置的文件夹,默认为main.js
        filename: 'test.js', // 配置合并的js文件的规则，当有多个入口文件即多个chunk，可以在[]中书写规则，运行时将规则结果替换掉中括号
                            /*
                                规则： · name：使用chunk的名称替换
                                        · hash 总的资源hash 通常用于解决缓存问题 生成一个hash值（当文件内容改变时，hash值也会改变）后面可加:位数；例[hash:5]取五位hash值
                                        · chunkhash chunk的hash值
                            */ 
    }
    
}