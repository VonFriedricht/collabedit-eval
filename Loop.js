Loop = class{
  constructor(name, tickspeed) {
    this.name = name
    this.interval = false
    this.timer = 1000 / tickspeed
    this.funct = () => {}
  }
  isset() {
    return eval(`typeof ${this.name} != "undefined"`)
  }
  setTps(tps) {
    this.timer = 1000 / tps
  }
  start() {
    if (this.interval === false) {
      this.interval = setInterval(() => this.funct(), this.timer)
    }
  }
  end() {
    if (this.interval !== false) {
      clearInterval(this.interval)
      this.interval = false
    }
  }
  update() {
    if (this.isset()) {
      this.funct = eval(this.name)
      this.start()
    } else {
      this.end()
    }
  }
  clear() {
    eval(`delete ${this.name}`)
  }
}
