const readNumber = () => {
  let number

  while (!isFinite(number)) {
    number = prompt('Введите число', 0)
  }

  if (number === null || number === '') return null

  return +number
}

console.log(readNumber())
