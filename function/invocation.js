// Function Invocation
// function ใน Javascript สามารถ call ได้ 4 แบบ ดังนี้

// Invocation as function
// ก็คือ call function แบบปกติ

const square = x => x * x;
square(2);


// Invocation as method
// เมื่อ call แบบ object 
// เราสามารถ อ้างอิง property ของ object ด้วย this ได้
let person = {
  name: 'Pongneng'
}
person.sayHello = function(){
  console.log("Hello!, I'm ", this.name)
}
person.sayHello()


// Invocation as constructor
// เมื่อ function ถูก call ด้วย new operator
// จะเทียบเท่ากับการสร้าง object ใหม่

function Person(name) {
  this.name = name
}

Person.prototype.sayHello = function() {
  console.log("Hello!, I'm ", this.name)
}

new Person("Pongneng").sayHello() // Hello!, I'm  Pongneng
new Person("Benya").sayHello() // Hello!, I'm  Benya


// Invocation with apply and call method
// function ทุก function ใน Javascript จะมี method 2 อันติดมาด้วยเสมอ
// คือ call และ apply การใช้งานประมาณนี้

function sum() {
  let result = 0;
  for (let i = 0; i < arguments.length; i++) {
    result += arguments[i]
  }
  this.result = result
}

let a = {}
let b = {}

sum.apply(a, [1, 2, 3, 4])
a.result // 10
sum.call(b, 5, 6, 7, 8)
b.result // 26

// สังเกตุว่าเราสามารถเปลี่ยน context ของ function ได้ด้วย method apply และ call