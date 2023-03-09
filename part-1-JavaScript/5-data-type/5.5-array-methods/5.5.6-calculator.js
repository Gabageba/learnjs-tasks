function Calculator(params) {
  this.operators = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
  }

  this.calculate = function (str) {
    const arr = str.split(' ')
    const firstArgument = +arr[0]
    const operator = arr[1]
    const secondArgument = +arr[2]

    if (isNaN(firstArgument) || isNaN(secondArgument) || !this.operators[operator]) {
      return 'Some error'
    }
    return this.operators[operator](firstArgument, secondArgument)
  }

  this.addMethod = function (name, func) {
    this.operators[name] = func
  }
}

let calc = new Calculator()

console.log(calc.calculate('3 + 7')) // 10

let powerCalc = new Calculator()
powerCalc.addMethod('*', (a, b) => a * b)
powerCalc.addMethod('/', (a, b) => a / b)
powerCalc.addMethod('**', (a, b) => a ** b)

let result = powerCalc.calculate('2 ** 3')
console.log(result) // 8
