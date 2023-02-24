const getLocalDay = (date) => {
  const weekDay = date.getDay()
  if (weekDay === 0) weekDay = 7

  return weekDay
}

let date = new Date(2012, 0, 3)

console.log(getLocalDay(date))
