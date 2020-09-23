/**
 * 判断传入的数是不是一个素数（只能被1和自身整除的数，1除外）
 * @param {*} num 
 */
export default function (num) {
    if (num < 2) {
        return false;
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}