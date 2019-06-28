translation = code =>
  code
    .replace(/for ([a-zA-Z]*?) in range\(([^\s]*?)\)/g, 'for(let $1 = 0; $1 < $2; $1++)')
    .replace(/for ([a-zA-Z]*?) in range\(([^\s]*?),([^\s]*?)\)/g, 'for(let $1 = $2; $1 <= $3; $1++)')
    .replace(/([^\s]*?).clean\(\)/g, `if($1.canvas){$1.clearRect(0,0,$1.canvas.width,$1.canvas.height)}`)
