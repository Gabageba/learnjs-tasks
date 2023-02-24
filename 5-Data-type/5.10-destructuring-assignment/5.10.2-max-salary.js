const topSalary = (salaries) => {
  let maxSalary = 0
  let maxName = null

  for (const [name, salary] of Object.entries(salaries)) {
    if (salary > maxSalary) {
      maxName = name
    }
  }

  return maxName
}

const salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
}

console.log(topSalary(salaries))
console.log(topSalary({}))
