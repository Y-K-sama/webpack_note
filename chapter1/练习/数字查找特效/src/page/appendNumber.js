import getColor from '../until/getColor';
import {getNumber} from '../until/getColor';
const divContainer = document.getElementById('divContainer');
const divCenter = document.getElementById('divCenter');
export default function (num, isPrime) {
    const span = document.createElement('span');
    span.innerText = num;
    if (isPrime) {
        const color = getColor();
        span.style.color = color;
        newDiv(num,color);
    }
    divContainer.appendChild(span);
    divCenter.innerText = num;
}
function newDiv(num, color) {
    const div = document.createElement('div');
    div.innerText = num;
    div.style.color = color;
    div.className = 'numberCenter';
    document.body.appendChild(div);
    //强制重新渲染页面，不然下面样式不能算作更改的样式无法实现动画效果
    div.offsetTop;
    div.style.transform = `translate(${getNumber(-200,200)}px,${getNumber(-200,200)}px)`;
    div.style.opacity = 0;
    setTimeout(()=>{
        document.body.removeChild(div);
    },1000)
}