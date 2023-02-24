const filterRangeInPlace = (arr, a, b) => {
  arr.forEach((element, index) => {
    if (!(element >= a && element <= b)) {
      arr.splice(index, 1)
    }
  })
}

const arr = [5, 3, 8, 1]

filterRangeInPlace(arr, 1, 4) // удалены числа вне диапазона 1..4

console.log(arr)
