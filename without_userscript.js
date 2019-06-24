// To import this repo without userscript
fetch(`https://raw.githubusercontent.com/VonFriedricht/collabedit-eval/master/collabedit-eval.user.js`)
  .then(r => r.text())
  .then(r => eval(r))
