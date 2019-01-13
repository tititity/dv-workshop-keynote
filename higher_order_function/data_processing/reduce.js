require('./scripts') 

function reduce(array, combine, start) {
  let current = start
  for (let elem of array) {
    current = combine(current, elem)
  }
  return current
}

console.log("our own reduce: ", reduce([1, 2, 3, 4, 5], (a, b) => a + b, 0))
console.log("Array.reduce: ", [1, 2, 3, 4, 5].reduce((a, b) => a + b))

function characterCount(script) {
  return script.ranges.reduce((count, [from, to]) => {
    return count + (to - from)
  }, 0)
}

console.log("The biggest writing system is... \n", SCRIPTS.reduce((a, b) => {
  return characterCount(a) > characterCount(b) ? a : b
}))

// สมมติเขียน biggest เอง

let biggest = null
for (let script of SCRIPTS) {
  if (biggest == null ||
    characterCount(script) > characterCount(biggest)) {
    biggest = script
  }
}
console.log("The biggest writing system is... \n", biggest)

