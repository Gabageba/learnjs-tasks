const map = new Map()

map.set('name', 'John')

const keys = Array.from(map.keys())

// Error: keys.push is not a function
// Ошибка: keys.push -- это не функция
keys.push('more')

console.log(keys)
