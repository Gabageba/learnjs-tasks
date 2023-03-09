const users = [
  { name: 'John', age: 20, surname: 'Johnson' },
  { name: 'Pete', age: 18, surname: 'Peterson' },
  { name: 'Ann', age: 19, surname: 'Hathaway' },
]

const byField = (fieldName) => {
  return (a, b) => {
    return a[fieldName] > b[fieldName] ? 1 : -1
  }
}

users.sort(byField('name'))
console.log('by name: ')
users.forEach((user) => console.log(user.name))

users.sort(byField('age'))
console.log('by age: ')
users.forEach((user) => console.log(user.name))
