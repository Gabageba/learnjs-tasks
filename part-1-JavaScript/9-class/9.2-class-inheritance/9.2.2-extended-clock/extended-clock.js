class ExtendedClock extends Clock {
  constructor({ template, precision }) {
    super({ template })
    // let { precision = 1000 } = options
    this.precision = precision
  }

  start() {
    this.render()
    this.timer = setInterval(() => this.render(), this.precision)
  }
}
