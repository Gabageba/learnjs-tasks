const printNumbersInterval = (from, to) => {
  number = from
  const intervalId = setInterval(() => {
    console.log(number)
    number++

    number > to && clearInterval(intervalId)
  }, 1000)
}

printNumbersInterval(1, 6)

const printNumbersTimeout = (from, to) => {
  number = from

  setTimeout(
    (func = () => {
      if (number <= to) {
        console.log(number)
        number++
        setTimeout(func, 1000)
      }
    }),
    1000,
  )
}

printNumbersTimeout(1, 6)
