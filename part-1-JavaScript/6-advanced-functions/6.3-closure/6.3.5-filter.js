const arr = [1, 2, 3, 4, 5, 6, 7]

const inBetween = (min, max) => {
  return (num) => {
    return num >= min && num <= max
  }
}

const inArray = (arr) => {
  return (num) => {
    return arr.includes(num)
  }
}

console.log(arr.filter(inBetween(3, 6)))

console.log(arr.filter(inArray([1, 2, 10])))
