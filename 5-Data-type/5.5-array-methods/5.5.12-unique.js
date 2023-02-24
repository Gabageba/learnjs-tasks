const unique = (arr) => {
  const result = []

  arr.forEach((str) => !result.includes(str) && result.push(str))

  return result
}

const strings = ['кришна', 'кришна', 'харе', 'харе', 'харе', 'харе', 'кришна', 'кришна', ':-O']

console.log(unique(strings))
