const lists = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
}

const printListRecursion = (list) => {
  console.log(list.value)

  if (list.next) {
    printListRecursion(list.next)
  }
}

console.log('printListRecursion: ')
printListRecursion(lists)

const printListCycle = (list) => {
  while (list) {
    console.log(list.value)
    list = list.next
  }
}

console.log('printListCycle: ')
printListCycle(lists)
