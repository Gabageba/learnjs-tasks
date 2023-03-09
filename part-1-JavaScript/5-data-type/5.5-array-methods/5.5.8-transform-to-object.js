const users = [
  { name: 'Вася', surname: 'Пупкин', id: 1 },
  { name: 'Петя', surname: 'Иванов', id: 2 },
  { name: 'Маша', surname: 'Петрова', id: 3 },
]

const usersMapped = users.map((user) => {
  return {
    fullName: user.name + ' ' + user.surname,
    id: user.id,
  }
})

console.log(usersMapped[0].id) // 1
console.log(usersMapped[0].fullName) // Вася Пупкин
