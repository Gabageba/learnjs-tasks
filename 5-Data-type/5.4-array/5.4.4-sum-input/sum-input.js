const sumInput = () => {
  const numbers = []
  let sum = 0

  while (true) {
    const currentNum = prompt('Введите число')

    if (currentNum === '' || currentNum === 'null' || !isFinite(currentNum)) break

    numbers.push(+currentNum)
  }

  for (let num of numbers) {
    sum += num
  }

  return sum
}

console.log(sumInput())
