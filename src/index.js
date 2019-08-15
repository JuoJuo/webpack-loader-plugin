
import sum from './base';

const ret = sum(1, 2);

console.log(ret);

const logo = require('./webs.png');
const img = new Image();
img.src = logo;
document.body.appendChild(img);
