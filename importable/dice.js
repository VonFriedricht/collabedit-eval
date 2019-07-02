dice = function(a, b) {
  let min = 1
  let max = Number(a)
  if (typeof b != 'undefined') {
    min = Number(a)
    max = Number(b)
  }
  return min + Number(Math.floor(Math.random() * (max - min + 1)))
}
