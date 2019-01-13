require('./scripts') 

function average(array) {
  return array.reduce((a, b) => a + b) / array.length
}

console.log("Average year of living script is ", Math.round(average(SCRIPTS.filter(s => s.living).map(s => s.year))))

console.log("Average year of dead script is ", Math.round(average(SCRIPTS.filter(s => !s.living).map(s => s.year))))

// เทียบกับเขียนแบบ ปกติ

let total = 0, count = 0
for (let script of SCRIPTS) {
  if (script.living) {
    total += script.year
    count += 1
  }
}

console.log(Math.round(total / count)) // 1188