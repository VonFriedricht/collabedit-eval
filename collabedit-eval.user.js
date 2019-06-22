// ==UserScript==
// @name         collabedit-eval
// @namespace	 https://github.com/VonFriedricht/collabedit-eval
// @version      0.1.7
// @description  evals the javascript in collabedit.com
// @author       VonFriedricht
// @match        http://collabedit.com/*
// @grant        none
// @updateURL	 https://github.com/VonFriedricht/collabedit-eval/raw/master/collabedit-eval.user.js
// ==/UserScript==

var Loop;
var loopstatus;

var lastCode;

async function require(path){
  let basePath = `https://raw.githubusercontent.com/VonFriedricht/collabedit-eval/master/`
  let response = await fetch(basePath+path)
  let responseText = await response.text()
  return eval(responseText)
}

async function init() {
  Loop = await require("Loop.js")
  // chat = await require("chat.js")
  // createCanvas = await require("createCanvas.js")
  loops = [
    new Loop("loop", 30), 
    new Loop("slowLoop", 10), 
    new Loop("clock", 1)
  ]
}

function exec(){
  let frame = document.getElementById("frame_the_input")
  if (!frame) return false
  let code = frame.contentDocument.getElementById("textarea").value
  if (lastCode != code) {
    lastCode = code
    for (let l of loops) {
      l.clear()
    }
    let evalreturn = eval(code)
    console.log(evalreturn)
    for (let l of loops) {
      l.update()
    }
  }
}

chat = {
  log: message => {
    var div = document.createElement("div")
    div.className = "chtmsg"
    div.innerHTML = `<span class="nickspan">log: </span><span class="normalchat">${message}</span>`
    document.getElementById("message_div").appendChild(div)
  }
}

createCanvas = (x, y) => {
  let canvas = document.getElementById("canvas")
  if (!canvas) {
    canvas = document.createElement("canvas")
    canvas.id = "canvas"
    canvas.style.border = "1px dotted gray"
    canvas.style.position = "absolute"
    canvas.style.right = "4em"
    canvas.style.top = "9em"
    document.getElementById("main").prepend(canvas)
  }
  canvas.width = x
  canvas.height = y
  return canvas
}

init().then(setInterval(exec, 1000))
