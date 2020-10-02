const devConfig = require('./webpack.dev');
const prodConfig = require('./webpack.prod');
const baseConfig = require('./webpack.base');
module.exports = function (env) {
    if (env && env.prod) {
        // 生产环境
        
        return {
            ...baseConfig,
            ...prodConfig
        }
        
    } else{
        // 开发环境
        return {
            ...baseConfig,
            ...devConfig
        }
    }
}