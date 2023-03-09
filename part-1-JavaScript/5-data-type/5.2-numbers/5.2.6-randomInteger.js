const randomInteger = (min, max) => {
  const randNumb = Math.random() * (max - min + 1) + min
  return Math.floor(randNumb)
}

console.log(randomInteger(1, 3))
console.log(randomInteger(1, 3))
console.log(randomInteger(1, 3))
