http://collabedit.com

requires programming language selected, evals code as javascript on change

[https://github.com/VonFriedricht/collabedit-eval/raw/master/collabedit-eval.user.js](https://github.com/VonFriedricht/collabedit-eval/raw/master/collabedit-eval.user.js)

experimental support for `node-canvas`  
try their example:  
```js
const canvas = createCanvas(200, 250)
const ctx = canvas.getContext('2d')

// Write "Awesome!"
ctx.font = '30px Impact'
ctx.rotate(0.1)
ctx.fillText('Awesome!', 50, 100)

// Draw line under text
var text = ctx.measureText('Awesome!')
ctx.strokeStyle = 'rgba(0,0,0,0.5)'
ctx.beginPath()
ctx.lineTo(50, 102)
ctx.lineTo(50 + text.width, 102)
ctx.stroke()

```
