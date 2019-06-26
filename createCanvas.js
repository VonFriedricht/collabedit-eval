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
  if (input && !KEYS && !MOUSE) {
    KEYS = {
      status: {},
      pressed: function(e) {
        return this.status[e]
      }
    }
    MOUSE = {
      pressed: false,
      x: -1,
      y: -1
    }
    canvas.onmousedown = e => {
      MOUSE.pressed = true
    }
    canvas.onmouseup = e => {
      MOUSE.pressed = false
    }
    canvas.onmousemove = e => {
      MOUSE.x = e.layerX
      MOUSE.y = e.layerY
    }
    document.onkeydown = e => {
      KEYS.status[e.key] = true
    }
    document.onkeyup = e => {
      KEYS.status[e.key] = false
    }
  }
  canvas.width = x
  canvas.height = y
  return canvas
}
