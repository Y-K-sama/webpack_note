// 默认的配置文件，可以通过 webpack --config 文件名 来修改配置文件
/**
 *  文件格式通过commonJS导出一个对象
 *      原因：在打包过程中需要运行该文件，且是node环境，所以必须使用commonJS格式导出而不能使用es6的模块化
 *      对象属性：mode:编译模式，development 开发模式 production 生产模式(默认)
 *               entry:入口，指定入口文件，默认'./src/index.js'
 *               output:指定编译结果的文件，值是一个对象
 *                      {
 *                          filename:文件名，默认为main.js
 *                      }
*/
module.exports = {
    mode: 'production',
    // entry:'./src/a.js'
    // output:{
    //     filename:'a.js'
    // }
}