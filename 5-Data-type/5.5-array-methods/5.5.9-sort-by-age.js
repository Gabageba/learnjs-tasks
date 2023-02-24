const sortByAge = (users) => {
  users.sort((a, b) => a.age - b.age)
}

const arr = [
  { name: 'Вася', age: 25 },
  { name: 'Петя', age: 30 },
  { name: 'Маша', age: 28 },
]

sortByAge(arr)

// теперь: [vasya, masha, petya]
console.log(arr[0].name) // Вася
console.log(arr[1].name) // Маша
console.log(arr[2].name) // Петя
