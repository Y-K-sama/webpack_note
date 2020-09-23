import isPrime from './isPrime';
// 生成数字的类，从1开始每次加1
export default class Number {
    constructor(interval = 500) {
        // 生成数字间隔时间，默认为500，单位毫秒
        this.interval = interval;
        this.num = 1;
        // 回调函数
        this.numberUse = null;
        this.timer = null;
    }
    start() {
        if (this.timer) {
            return false;
        }
        this.timer = setInterval(() => {
            if (this.numberUse) {
                // 回调函数中传入数字和是否为素数
                this.numberUse(this.num, isPrime(this.num));
            }
            this.num++;
        }, this.interval)
    }
    stop() {
        clearInterval(this.timer);
        this.timer = null;
    }
}