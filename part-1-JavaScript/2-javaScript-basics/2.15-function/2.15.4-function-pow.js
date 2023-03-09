function pow(x, n) {
  if (n % 1 !== 0) {
    return `Число ${n} не натуральное`
  }
  return x ** n
}

console.log(pow(2, 3))
console.log(pow(2, 2.2))
console.log(pow(2.2, 2))
