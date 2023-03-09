const age = 20

if (age < 14 || age > 90) {
  console.log('Не в диапазоне')
} else {
  console.log('В диапазоне')
}

if (!(age >= 14 && age <= 90)) {
  console.log('Не в диапазоне')
} else {
  console.log('В диапазоне')
}
