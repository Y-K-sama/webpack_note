(function (modules) {
    function require(mod) {
        const module = {
            exports:{}
        }
        modules[mod](module,module.exports,require);
        return module.exports;
    }

    require('./src/index.js');//运行一个模块,得到模块导出的结果

})({
    './src/a.js': function (module, exports, require) {
        console.log('module a');
        module.exports = 'this a';
    },
    './src/index.js': function (module, exports, require) {
        console.log('index module');
        const a = require('./src/a.js');//
        console.log(a);
    }
})