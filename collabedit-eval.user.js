// ==UserScript==
// @name         collabedit-eval
// @namespace    https://github.com/VonFriedricht/collabedit-eval
// @version      0.2.3
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
var animLoop
var codeTranslations

// To import other files inside repo
require = async function(path) {
  let basePath = `https://raw.githubusercontent.com/VonFriedricht/collabedit-eval/master/`
  let response = await fetch(basePath + path)
  let responseText = await response.text()
  return eval(responseText)
}

// First Script at Startup
async function init() {
  Loop = await require('src/Loop.js')
  chat = await require('src/chat.js')
  createCanvas = await require('src/createCanvas.js')
  codeTranslations = await require('src/codeTranslations.js')
  loops = [new Loop('loop', 30), new Loop('slowLoop', 10), new Loop('clock', 1)]
  animLoop = await require('src/animLoop.js')

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
  code = codeTranslations(code)
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
init().then(setInterval(exec, 1000))
