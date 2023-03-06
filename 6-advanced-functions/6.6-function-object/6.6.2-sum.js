const sum = (a) => {
  let result = a

  const func = (b) => {
    result += b

    return func
  }

  func.toString = () => result

  return func
}

//console.log в отличае от alert, не вызывает toString.
//Поэтому, пришлось использовать JSON.parse.
//Как это сделать без него я не могу придумать

console.log(JSON.parse(sum(1)(2)))
console.log(JSON.parse(sum(1)(2)(3)))
console.log(JSON.parse(sum(5)(-1)(2)))
console.log(JSON.parse(sum(6)(-1)(-2)(-3)))
console.log(JSON.parse(sum(0)(1)(2)(3)(4)(5)))
