## collabedit-eval
### About

The UserScript evals Code that is written inside [collabedit](http://collabedit.com) `onchange`.

It requires that a programming language is selected after a Channel has been joined/created.

Tested on Tampermonkey, Greasemonkey should also work.
Click to install: [https://github.com/VonFriedricht/collabedit-eval/raw/master/collabedit-eval.user.js](https://github.com/VonFriedricht/collabedit-eval/raw/master/collabedit-eval.user.js)

Link to [http://collabedit.com](http://collabedit.com)
  
  

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
