const shuffle = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    const randomIndex = Math.floor(Math.random() * (i + 1))

    const currentNum = arr[i]
    arr[i] = arr[randomIndex]
    arr[randomIndex] = currentNum
  }
}

const arr = [1, 2, 3]

shuffle(arr)
console.log(arr)

shuffle(arr)
console.log(arr)

shuffle(arr)
console.log(arr)
