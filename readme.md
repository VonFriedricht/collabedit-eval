## collabedit-eval
### About

The UserScript evaluates Code written in [collabedit](http://collabedit.com) when the code changes.

Tested on [Tampermonkey](https://www.tampermonkey.net/), but Greasemonkey should also work.  
Click to install UserScript: [https://github.com/VonFriedricht/collabedit-eval/raw/master/collabedit-eval.user.js](https://github.com/VonFriedricht/collabedit-eval/raw/master/collabedit-eval.user.js)

Link to [http://collabedit.com](http://collabedit.com)
  
  
### node-canvas support
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

### animation
wip  
anim, loop, slowLoop, clock

```js
const canvas = createCanvas(100,100)
const ctx = canvas.getContext("2d")

let x = 0

anim = () => {
    ctx.clean()
    ctx.fillRect(x,10,10,10)
    x++
}
```

### input
wip  
canvas.mouse, canvas.keys

### alternative for-loop
```js
for i in range(5){

}
// getting converted to:
for (let i = 0; i < 5; i++) {

}
// because a for loop can become infinite while writing
```

### without userscript:
to load the script without userscript can you just paste this script in the console (in f12 at most browsers)
```js
fetch(`https://raw.githubusercontent.com/VonFriedricht/collabedit-eval/master/collabedit-eval.user.js`)
  .then(r => r.text())
  .then(r => eval(r))
```
