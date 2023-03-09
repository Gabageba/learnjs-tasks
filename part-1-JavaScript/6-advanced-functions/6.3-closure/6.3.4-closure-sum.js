const sum = (firstNum) => {
  return (secondNum) => {
    console.log(firstNum + secondNum)
  }
}

sum(1)(2)
sum(5)(-1)
