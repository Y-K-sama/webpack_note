const colorArr = ['#ff4400', '#0044ff', '#00ff44', '#ff0044', '#44ff00', '#4400ff'];
/**
 * 获取最大值和最小值之间的随机整数，不包含最大值
 * @param {*} min 
 * @param {*} max 
 */
export function getNumber(min, max) {
    const num = Math.floor(Math.random() * (max - min) + min);
    return num;
}
export default function () {
    const index = getNumber(0, colorArr.length);
    return colorArr[index];
}