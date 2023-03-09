const user = {
  name: 'Василий Иванович',
  age: 35,
}

const copyUser = JSON.parse(JSON.stringify(user))
console.log(copyUser)
