var translations = [
  [/for ([a-zA-Z]*?) in range\(([^\s]*?)\)/, 'for(let $1 = 0; $1 < $2; $1++)'],
  [/for ([a-zA-Z]*?) in range\(([^\s]*?),([^\s]*?)\)/, 'for(let $1 = $2; $1 <= $3; $1++)'],
  [/([^\s]*?).clean\(\)/, 'if($1.canvas){$1.clearRect(0,0,$1.canvas.width,$1.canvas.height)}'],
  [/#import ([^\s]*?)\n/, 'if(typeof $1 == "undefined"){require("importable/$1.js").then(e=>$1=e)}\n'],
  [/wiederhole ([^\s]*?) mal/, 'for(let _wiederholung = 0; _wiederholung < $1; _wiederholung++)']
]
translation = code => {
  translations.forEach(t => (code = code.replace(new RegExp(t[0], 'g'), t[1])))
  return code
}
