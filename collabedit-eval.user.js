// ==UserScript==
// @name         collabedit-eval
// @namespace	 https://github.com/VonFriedricht/collabedit-eval
// @version      0.1.2
// @description  evals the javascript in collabedit.com
// @author       VonFriedricht
// @match        http://collabedit.com/*
// @grant        none
// @updateURL	 https://github.com/VonFriedricht/collabedit-eval/raw/master/collabedit-eval.user.js
// ==/UserScript==

let lastCode = "hello world";

function main() {
  let frame = document.getElementById("frame_the_input");
  if (!frame) return false;
  let code = frame.contentDocument.getElementById("textarea").value;
  if (lastCode != code) {
    lastCode = code;
    let evalreturn = eval(code);
    console.log(evalreturn);
  }
}

chat = {
  log: message => {
    var div = document.createElement("div");
    div.className = "chtmsg";
    div.innerHTML = `<span class="nickspan">log: </span><span class="normalchat">${message}</span>`;
    document.getElementById("message_div").appendChild(div);
  }
};

createCanvas = (x, y) => {
  let canvas = document.getElementById("canvas");
  if (!canvas) {
    canvas = document.createElement("canvas");
    canvas.id = "canvas";
    canvas.style.border = "1px dotted gray";
    canvas.style.position = "absolute";
    canvas.style.right = "320px";
    canvas.style.top = "1em";
    document.getElementById("main").prepend(canvas);
  }
  canvas.width = x;
  canvas.height = y;
  return canvas;
};

setInterval(main, 1000);
