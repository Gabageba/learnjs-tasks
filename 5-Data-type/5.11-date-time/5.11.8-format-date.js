const formatDate = (date) => {
  const difference = new Date() - date

  if (difference < 1000) return 'прямо сейчас'
  else if (difference < 1000 * 60) return `${Math.floor(difference / 1000)} сек. назад`
  else if (difference < 1000 * 60 * 60) return `${Math.floor(difference / (1000 * 60))} мин. назад`

  const currentDate = date.getDate() > 10 ? date.getDate() : '0' + date.getDate()
  const currentMonth = date.getMonth() > 10 ? date.getMonth() : '0' + date.getMonth()
  const currentHours = date.getHours() > 10 ? date.getHours() : '0' + date.getHours()
  const currentMinutes = date.getMinutes() > 10 ? date.getMinutes() : '0' + date.getMinutes()

  return `${currentDate}.${currentMonth}.${date.getFullYear()}, ${currentHours}:${currentMinutes}`
}

console.log(formatDate(new Date(new Date() - 1))) // "прямо сейчас"

console.log(formatDate(new Date(new Date() - 30 * 1000))) // "30 сек. назад"

console.log(formatDate(new Date(new Date() - 5 * 60 * 1000))) // "5 мин. назад"

console.log(formatDate(new Date(new Date() - 86400 * 1000)))
