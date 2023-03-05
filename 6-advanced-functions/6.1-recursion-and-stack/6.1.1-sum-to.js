const sumToCycle = (number) => {
  let sum = 0
  for (let i = 0; i < number; i++) {
    sum += i + 1
  }
  return sum
}

console.log('sumToCycle: ')
console.log(sumToCycle(1))
console.log(sumToCycle(2))
console.log(sumToCycle(3))
console.log(sumToCycle(4))
console.log(sumToCycle(100))

const sumToRecursion = (number) => {
  if (number === 1) return 1

  return number + sumToRecursion(number - 1)
}

console.log('sumToRecursion: ')
console.log(sumToRecursion(1))
console.log(sumToRecursion(2))
console.log(sumToRecursion(3))
console.log(sumToRecursion(4))
console.log(sumToRecursion(100))

const sumToProgression = (number) => {
  return ((1 + number) * number) / 2
}

console.log('sumToProgression: ')
console.log(sumToProgression(1))
console.log(sumToProgression(2))
console.log(sumToProgression(3))
console.log(sumToProgression(4))
console.log(sumToProgression(100))
