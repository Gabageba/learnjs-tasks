let maxNumber = 10

numbers: for (let i = 1; i <= maxNumber; i++) {
  for (let j = 2; j <= Math.round(Math.sqrt(i)); j++) {
    if (i % j === 0) {
      continue numbers
    }
  }
  console.log(i)
}
