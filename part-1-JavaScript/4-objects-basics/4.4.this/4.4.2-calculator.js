let calculator = {
  read(a, b) {
    this.a = a
    this.b = b
  },
  sum() {
    return this.a + this.b
  },
  mul() {
    return this.a * this.b
  },
}

calculator.read(2, 4)
console.log(calculator.sum())
console.log(calculator.mul())
