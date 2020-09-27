module.exports = function (css) {
    // 用来处理css文件，将css文件转换为js格式
    /*
        先创建一个style标签，然后将css文件的内容放入style标签中，然后将style标签插入到head标签中
        当其他模块中想要使用css文件的文本时，可以在代码中将文本导出，这样其他模块导入.css文件是就会得到.css文件的文本内容
    */
    return `
    const style = document.createElement('style');
    style.innerText = \`${css}\`;
    document.head.appendChild(style);
    module.exports = \`${css}\`;
    `
}


