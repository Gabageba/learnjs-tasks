const getLastDayOfMonth = (year, month) => {
  return new Date(year, month + 1, 0).getDate()
}

console.log(getLastDayOfMonth(2012, 1))
console.log(getLastDayOfMonth(2012, 0))
console.log(getLastDayOfMonth(2013, 1))
