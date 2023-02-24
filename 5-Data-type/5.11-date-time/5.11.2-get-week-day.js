const getWeekDay = (date) => {
  const weekDays = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ']

  return weekDays[date.getDay()]
}

let date = new Date(2012, 0, 3)

console.log(getWeekDay(date))
console.log(getWeekDay(new Date()))
