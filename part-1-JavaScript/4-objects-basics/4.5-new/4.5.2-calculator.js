function Calculator() {
  this.read = function (a, b) {
    this.a = a
    this.b = b
  }
  this.sum = function () {
    return this.a + this.b
  }
  this.mul = function () {
    return this.a * this.b
  }
}

let calculator = new Calculator()
calculator.read(2, 4)

console.log('Sum=' + calculator.sum())
console.log('Mul=' + calculator.mul())
