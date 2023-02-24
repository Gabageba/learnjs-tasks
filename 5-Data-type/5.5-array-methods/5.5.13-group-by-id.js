const groupById = (arr) => {
  return arr.reduce((prevObj, item) => {
    prevObj[item.id] = item
    return prevObj
  }, {})
}

const users = [
  { id: 'john', name: 'John Smith', age: 20 },
  { id: 'ann', name: 'Ann Smith', age: 24 },
  { id: 'pete', name: 'Pete Peterson', age: 31 },
]

const usersById = groupById(users)
console.log(usersById)
