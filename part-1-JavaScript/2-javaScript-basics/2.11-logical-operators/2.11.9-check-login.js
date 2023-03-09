const login = prompt('Введите логин')

if (login === 'Админ') {
  const password = prompt('Введите пароль')

  if (password === 'Я главный') {
    console.log('Здравствуйте!')
  } else if (password === null || login === '') {
    console.log('Отменено')
  } else {
    console.log('Неверный пароль')
  }
} else if (login === null || login === '') {
  console.log('Отменено')
} else {
  console.log('Я вас не знаю')
}
