translation = code =>
  code
    .replace(/for ([a-zA-Z]*?) in range\(([^\s]*?)\)/g, 'for(let $1 = 0; $1 < $2; $1++)')
    .replace(/for ([a-zA-Z]*?) in range\(([^\s]*?),([^\s]*?)\)/g, 'for(let $1 = $2; $1 <= $3; $1++)')
    .replace(/([^\s]*?).clean\(\)/g, `if($1.canvas){$1.clearRect(0,0,$1.canvas.width,$1.canvas.height)}`)
    .replace(/#import ([^\s]*?)\n/g, 'if(typeof $1 == "undefined"){require("importable/$1.js").then(e=>$1=e)}\n')
    .replace(/wiederhole ([^\s]*?) mal/g, 'for(let _wiederholung = 0; _wiederholung < $1; _wiederholung++)')
