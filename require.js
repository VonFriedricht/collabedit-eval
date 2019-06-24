// To import other files inside repo
async function require(path) {
  let basePath = `https://raw.githubusercontent.com/VonFriedricht/collabedit-eval/master/`
  let response = await fetch(basePath + path)
  let responseText = await response.text()
  return eval(responseText)
}
