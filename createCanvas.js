createCanvas = (x, y, input = false) => {
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
  if (input && !canvas.keys && !canvas.mouse) {
    canvas.keys = {
      status: {},
      pressed: function(e) {
        return this.status[e]
      }
    }
    canvas.mouse = {
      pressed: false,
      x: -1,
      y: -1
    }
    canvas.onmousedown = e => {
      canvas.mouse.pressed = true
    }
    canvas.onmouseup = e => {
      canvas.mouse.pressed = false
    }
    canvas.onmousemove = e => {
      canvas.mouse.x = e.layerX
      canvas.mouse.y = e.layerY
    }
    document.onkeydown = e => {
      canvas.keys.status[e.key] = true
    }
    document.onkeyup = e => {
      canvas.keys.status[e.key] = false
    }
  }
  canvas.width = x
  canvas.height = y
  return canvas
}
