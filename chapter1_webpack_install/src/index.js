console.log("这是默认的入口文件，在src目录下的index");
const a = require('./a');
console.log('a:',a)
// 打包命令 webpack,在npm中使用要加npx webpack
// 打包的文件会放在dist/main.js
// 打包好的文件与src下文件的执行效果相同
// 打包为开发环境的包 webpack --mode=development
// 打包为生产环境的包 webpack --mode=production(默认值)