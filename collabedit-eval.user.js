// ==UserScript==
// @name         collabedit-eval
// @namespace    https://github.com/VonFriedricht/collabedit-eval
// @version      0.2.2
// @description  evals the javascript in collabedit.com
// @author       VonFriedricht
// @match        http://collabedit.com/*
// @grant        none
// @updateURL    https://github.com/VonFriedricht/collabedit-eval/raw/master/collabedit-eval.user.js
// ==/UserScript==

// Scoping
var Loop
var loops
var lastCode
var randomUpdateNumber = Math.random() // gets rerolled everytime the code updates
var lastRandomUpdateNumber = -1

// To import other files inside repo
async function require(path) {
  let basePath = `https://raw.githubusercontent.com/VonFriedricht/collabedit-eval/master/`
  let response = await fetch(basePath + path)
  let responseText = await response.text()

  return eval(responseText)
}

// First Script at Startup
async function init() {
  Loop = await require('Loop.js')
  chat = await require('chat.js')
  createCanvas = await require('createCanvas.js')
  loops = [new Loop('loop', 30), new Loop('slowLoop', 10), new Loop('clock', 1)]

  chat.log('init passed!')
}

// Main-Loop after init
function exec() {
  let frame = document.getElementById('frame_the_input')
  if (!frame) return false
  let code = frame.contentDocument.getElementById('textarea').value
  if (lastCode == code) {
    return false
  }
  // everytime the code changes ↓
  lastCode = code
  lastRandomUpdateNumber = randomUpdateNumber
  for (let l of loops) {
    l.clear()
  }
  code = code
    .replace(/for ([a-zA-Z]*?) in range\(([^\s]*?)\)/g, 'for(let $1 = 0; $1 < $2; $1++)')
    .replace(/for ([a-zA-Z]*?) in range\(([^\s]*?),([^\s]*?)\)/g, 'for(let $1 = $2; $1 <= $3; $1++)')
  let evalreturn = eval(code)
  console.log(evalreturn)
  for (let l of loops) {
    l.update()
  }
  if (typeof animLoop == 'function') {
    setTimeout(() => {
      randomUpdateNumber = Math.random()
      animLoop()
    }, 100)
  }
  //
}

// ↑ wake-up
require('animLoop.js').then(n => init().then(setInterval(exec, 1000)))
