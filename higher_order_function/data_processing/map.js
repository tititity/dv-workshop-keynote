require('./scripts')

function map(array, transform) {
  let mapped = []
  for (let element of array) {
    mapped.push(transform(element))
  }
  return mapped
}

// เนื่องจาก filter เป็น built-in function ของ Array อยู่แล้ว
let rtlScripts = SCRIPTS.filter(s => s.direction == 'rtl')
console.log(map(rtlScripts, s => s.name))