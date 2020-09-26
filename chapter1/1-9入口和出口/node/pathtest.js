// 导出一个对象，该对象中有大量路径处理的函数
const path = require('path');
// 例resolve 将多段路径拼接成一个路径
const result = path.resolve('./', 'a', 'b', 'c');// 此处"./"表示node运行目录
const a = path.resolve(_dirname, 'src');
console.log('result=',result);
console.log('a=',a);
