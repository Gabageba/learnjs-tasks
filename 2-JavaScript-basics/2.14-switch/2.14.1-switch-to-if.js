const browser = 'Chrome'

if (browser === 'Edge') {
  console.log("You've got the Edge!")
} else if (
  browser === 'Firefox' ||
  browser === 'Safari' ||
  browser === 'Chrome' ||
  browser === 'Opera'
) {
  console.log('Okay we support these browsers too')
} else {
  console.log('We hope that this page looks ok!')
}
