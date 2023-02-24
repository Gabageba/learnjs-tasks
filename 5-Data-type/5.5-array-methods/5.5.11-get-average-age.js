const getAverageAge = (users) => {
  const sum = users.reduce((prevSum, user) => prevSum + user.age, 0)

  return sum / users.length
}

let arr = [
  { name: 'Вася', age: 25 },
  { name: 'Петя', age: 30 },
  { name: 'Маша', age: 29 },
]

console.log(getAverageAge(arr))
