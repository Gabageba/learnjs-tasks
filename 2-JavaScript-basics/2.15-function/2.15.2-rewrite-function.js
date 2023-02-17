//with ?
function checkAge(age) {
  return age > 18 ? true : confirm('Родители разрешили?')
}

//with ||
function checkAge(age) {
  return age > 18 || confirm('Родители разрешили?')
}
