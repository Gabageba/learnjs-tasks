const camelize = (str) => {
  return str
    .split('-')
    .map((item, index) => {
      return index === 0 ? item : item[0].toUpperCase() + item.slice(1)
    })
    .join('')
}

console.log(camelize('background-color'))
console.log(camelize('list-style-image'))
console.log(camelize('-webkit-transition'))
