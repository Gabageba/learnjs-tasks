function Accumulator(startingValue) {
  this.value = startingValue
  this.read = function (num) {
    this.value += num
  }
}

let accumulator = new Accumulator(1) // начальное значение 1

accumulator.read(2) // прибавляет введённое пользователем значение к текущему значению
accumulator.read(3) // прибавляет введённое пользователем значение к текущему значению

console.log(accumulator.value) // выведет сумму этих значений
