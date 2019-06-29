Rectangle = class {
  constructor(x = 0, y = 0, width = 10, height = 10) {
    this.x = x
    this.y = y
    this.width = width
    this.height = height
  }
  draw(ctx) {
    ctx.fillRect(this.x, this.y, this.width, this.height)
  }
}
