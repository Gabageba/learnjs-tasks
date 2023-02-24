const aclean = (arr) => {
  const map = new Map()

  arr.forEach((item) => {
    const sorted = item.toLowerCase().split('').sort().join('')
    map.set(sorted, item)
  })

  return Array.from(map.values())
}

const arr = ['nap', 'teachers', 'cheaters', 'PAN', 'ear', 'era', 'hectares']

console.log(aclean(arr))
