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

let lastCode = "hello world";


class Loop(){
  constructor(name, tickspeed){
    this.name = name;
    this.interval = false;
    this.timer = 1000/tickspeed;
    this.funct = ()=>{}
  }
  isset(){
    return eval(`typeof `${this.name}` != "undefined"`)
  }
  setTps(tps){
    this.timer = 1000/tps;
  }
  start(){
    if( this.interval === false ){
      this.interval = setInterval(() => this.funct(), this.timer)
    }
  }
  end(){
    if( this.interval !== false ){
      clearInterval(this.interval)
      this.interval = false
    }
  }
  update(){
    if(this.isset()){
      this.funct = eval(this.name)
      this.start()
    }
    else{
      this.end()
    }
  }
  
}

let loopstatus = {
  loop: new Loop("loop")
}

function main() {
  let frame = document.getElementById("frame_the_input");
  if (!frame) return false;
  let code = frame.contentDocument.getElementById("textarea").value;
  if (lastCode != code) {
    lastCode = code;
    let evalreturn = eval(code);
    console.log(evalreturn);
    loopstatus.loop.update();
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
    canvas.style.right = "4em";
    canvas.style.top = "9em";
    document.getElementById("main").prepend(canvas);
  }
  canvas.width = x;
  canvas.height = y;
  return canvas;
};

slowLoop = ()=>{}
setInterval(function(){slowLoop()}, 1000/10);

clock = ()=>{}
setInterval(function(){clock()}, 1000);

loop = ()=>{}
setInterval(function(){loop()}, 1000/30);

setInterval(main, 1000);
