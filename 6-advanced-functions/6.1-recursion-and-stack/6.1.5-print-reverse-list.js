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

const printReverseListRecursion = (list) => {
  if (list.next) {
    printReverseListRecursion(list.next)
  }

  console.log(list.value)
}

console.log('printReverseListRecursion: ')
printReverseListRecursion(lists)

const printRevresesListCycle = (list) => {
  const listValue = []

  while (list) {
    listValue.unshift(list.value)
    list = list.next
  }

  listValue.forEach((value) => {
    console.log(value)
  })
}

console.log('printListCycle: ')
printRevresesListCycle(lists)
