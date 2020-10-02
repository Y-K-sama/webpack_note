const url = require('../imgs/webpack.png').default;

if (Math.random() > 0.7) {
    const img = document.createElement('img');
    img.src = url;
    document.body.appendChild(img);
}