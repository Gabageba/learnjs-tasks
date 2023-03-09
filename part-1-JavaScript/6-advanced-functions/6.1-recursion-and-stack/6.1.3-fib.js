const fib = (num) => {
  let firstNum = 1
  let secondNum = 1

  for (let i = 2; i < num; i++) {
    const thirdNum = firstNum + secondNum
    firstNum = secondNum
    secondNum = thirdNum
  }

  return secondNum
}

console.log(fib(3))
console.log(fib(7))
console.log(fib(77))
