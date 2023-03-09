const filterRange = (arr, a, b) => {
  return arr.filter((number) => number >= a && number <= b)
}

const arr = [5, 3, 8, 1]
const filtered = filterRange(arr, 1, 4)

console.log(filtered)
console.log(arr)
