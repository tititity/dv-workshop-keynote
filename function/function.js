// Function

// Defining Function

function square(x) {
    return x * x
}

const makeNoise = function() {
    console.log("Duhhh!")
}



// Fnction is first class object
// คือการบอกว่า function ทุกอย่างได้เหมือน object นั่นแหละ
// แต่ function มันเจ๋งกว่า object ตรงที่มัน invoke ได้
// แล้ว object ทำอะไรได้บ้าง

{} // ประกาศด้วย literal

let person = {} // assign ไว้ที่ตัวแปรได้

let person_list = []
pererson_list.push({}) // เก็บใน array ได้

person.profile = {} // assign เป็น property ของ object อีกตัวก็ได้

function take_leave(person) {
    person.absent = true
}
take_leave({}) // pass เข้าไปใน function อื่นก็ได้

function newPersion() {
    return {} // return จาก function ได้
}

let pongneng = {}
pongneng.age = 31 // assign property ใหม่ของตัวเองแบบ dynamic ได้เลย

// function ทำได้ทุกอย่างเหมือน object

function someFunction() {} // ประกาศด้วย literal

let someFunction = function(){} // assign ไว้ที่ตัวแปรได้

let some_list = []
some_list.push(function(){}) // เก็บใน array ได้

person.data = function(){} // assign เป็น property ของ object อีกตัวก็ได้

function call(someFunction) {
    someFunction()
}
call(function(){}) // pass เข้าไปใน function อื่นก็ได้

function execute() {
    return function(){} // return จาก function ได้
}

let personFunction = function(){}
personFunction.name = "Pongneng" // assign property ใหม่ของตัวเองแบบ dynamic ได้เลย


// Higher Order Function

// Callback: รายละเอียดใน callback dir

