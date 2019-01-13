// Abstractions
// คิดว่า style ไหนเกิด bug ได้ ง่ายกว่ากัน

let total = 0,
  count = 1
while (count <= 10) {
  total += count
  count += 1
}
console.log(total)

// และ

console.log(sum(range(1, 10)))

// แบบที่สองมีแนวโน้มจะเกิด bug น้อยกว่าเพราะว่า เป็น pure function
// ซึ่ง test ได้ง่าย และ แต่ละ function ทำหน้าที่เล็กของตัวเองแค่อย่างเดียว
// การสร้าง function ใหม่เป็น function เล็กๆ ที่ทำหน้าที่แค่อย่างเดียวนี่
// เรียกว่า Abstraction

// Abstract Repetition
// ปกติเราจะ loop print เลขก็จะเขียนโค้ดประมาณนี้

for (let i = 0; i < 10; i++) {
  console.log(i)
}

// แต่ถ้าเราอยากทำ N ครั้ง?

function repeatLog(n) {
  for (let i = 0; i < n; i++) {
    console.log(i)
  }   
}

// แล้วถ้าเราไม่อยากแค่ log?

function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i)
  }
}

repeat(3, conosole.log)

let labels = []
repeat(5, i => { labels.push(`Unit ${i + 1}`) })
console.log(labels)

// Higher Order Function
// ก็คือการที่ function สามารถ pass เป็น argument หรือ return ได้
// ซึ่งช่วยให้เราสร้าง abstraction ได้ง่ายขึ้น
// เช่น

function greaterThan(n) {
  return m => m > n
}
let greaterThan10 = greaterThan(10)
console.log(greaterThan10(11)) // true

// หรือสร้าง function เพื่อเพิ่มพฤติกรรมของอีก function หนึ่ง

function noisy(f) {
  return (...args) => {
    console.log("calling with", args)
    let result = f(...args)
    console.log("called with", args, ", returned", result)
    return result
  }
}
noisy(Math.min)(3, 2, 1)
// calling with [3, 2, 1]
// called with [3, 2, 1] , returned 1

// higher-order functions ถูกนำไปใช้มากเวลาทำ data processing ดู ต.ย. ได้จาก data_processing directory
// 
// filter คือการ กรอง
// map คือการ transform
// redunce คือการ summarize ข้อมูล