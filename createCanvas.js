createCanvas = (x, y) => {
  let canvas = document.getElementById('canvas')
  if (!canvas) {
    canvas = document.createElement('canvas')
    canvas.id = 'canvas'
    canvas.style.border = '1px dotted gray'
    canvas.style.position = 'absolute'
    canvas.style.right = '4em'
    canvas.style.top = '9em'
    document.getElementById('main').prepend(canvas)
  }
  canvas.width = x
  canvas.height = y
  return canvas
}
