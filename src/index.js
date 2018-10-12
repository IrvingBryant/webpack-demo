import './style.css'
import Icon from './icon.jpg';
import print from './print'
function component() {
    var element = document.createElement('div');
    var btn = document.createElement('button');
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = print;
    element.appendChild(btn);
    // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
    // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');
    var img = new Image();
    img.src = Icon;
    element.appendChild(img);
    return element;
  }
var a={
  'a':'a',
  'b':'b'
} 
export {a} 
  document.body.appendChild(component());