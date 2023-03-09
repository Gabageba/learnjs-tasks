function f(a) {
  console.log(a)
}

function throttle(f, ms) {
  let isActive = false
  let currentThis
  let currentArgs

  return function wrapper() {
    if (isActive) {
      currentThis = this
      currentArgs = arguments
      return
    }

    f.apply(this, arguments)

    isActive = true

    setTimeout(() => {
      isActive = false
      if (currentArgs || currentThis) {
        wrapper.apply(currentThis, currentArgs)
        currentThis = null
        currentArgs = null
      }
    }, ms)
  }
}

// f1000 передаёт вызовы f максимум раз в 1000 мс
let f1000 = throttle(f, 1000)

f1000(1) // показывает 1
f1000(2) // (ограничение, 1000 мс ещё нет)
f1000(3) // (ограничение, 1000 мс ещё нет)
