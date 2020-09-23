// 绑定事件
import Number from '../until/number';
import appendNumber from './appendNumber';
let key = false;
const number = new Number(50);
number.numberUse = (num, isPrime) => {
    appendNumber(num, isPrime)
}
window.onclick = () => {
    if (key) {
        number.stop();
        key = false;
    } else {
        number.start();
        key = true;
    }
}