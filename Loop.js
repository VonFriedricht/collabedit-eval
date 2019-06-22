Loop = class {
  constructor(name, tickspeed) {
    this.name = name
    this.interval = false
    this.timer = 1000 / tickspeed
    this.funct = () => {}
  }
  isset() {
    return eval(`typeof ${this.name} == "function"`)
  }
  setTps(tps) {
    this.timer = 1000 / tps
  }
  start() {
    if (this.interval === false) {
      this.interval = setInterval(function(){
          if (this.isset()) {
            this.funct()
          }
        }
      , this.timer)
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
    if (this.isset()) {
      eval(`${this.name} = false`)
      this.funct = false
    }
  }
}
