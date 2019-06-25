createCanvas = (x, y, input = false) => {
  let canvas = document.getElementById('canvas')
  if (!canvas) {
    canvas = document.createElement('canvas')
    canvas.id = 'canvas'
    canvas.style.border = '1px dotted gray'
    canvas.style.position = 'absolute'
    canvas.style.right = '4em'
    canvas.style.top = '9em'
    if(input){
      canvas.onmousedown = e => {mouse.pressed = true}
      canvas.onmouseup = e => {mouse.pressed = false}
      canvas.onmousemove = e => {mouse.x = e.layerX; mouse.y = e.layerY}
      document.onkeydown = e => {console.log(1, e)}
      document.onkeyup = e => {console.log(0, e)}
    }
    document.getElementById('main').prepend(canvas)
  }
  canvas.width = x
  canvas.height = y
  return canvas
}
