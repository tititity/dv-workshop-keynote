// Operator

// Unary operator คือ operator ที่รับ input ค่าเดียว
// ที่ใช้บ่อยๆ เช่น typeof

typeof 1 // number
typeof "1" // string
typeof false // boolean
typeof function(){} // function
typeof {} // object

// Binary operator คือ operator ที่รับ input 2 ค่า
// ที่ใช้บ่อยๆ เช่น +, -, *, /, ===, <, >, >=, <=, &&, ||

1+1 // 2
1-1 // 0
1*1 // 1
1/1 // 1

// Boolean คือ ค่าที่เกิดจากการเปรียบเทียบ

1 === 1 // true
2 > 1 // true
true && true // true
true && false // false
true || false // true
false || false // false

// ทำไม === นะ?
// ใน Javascript มีสิ่งที่เขียนว่า Type coercion อยู่
// คือ มันจะพยายาม เปลี่ยน type ของ input ให้เราเมื่อเราใช้ binary operator 
// กับ input 2 ตัว ที่ type ต่างกัน

// ดังนั้นถ้าเราลองทำแบบนี้ดู
1 == "1" // true

// ซึ่งมันไม่ควรจะเกิดขึ้นเราก็เลยต้องใช้ ===
1 === "1" // false

// การเปรียบเทียบ string คือการเปรียบเทียบ ่าของ unicode code ทีละตัวจากซ้ายไปขวา
"A" < "a" // true

// Ternary operator คือ operator ที่รับ input 3 ค่า

true ? 1 : 2 // 1
false ? 1 : 2 // 2

// Empty values
// Javascript มี empty value 2 ตัว คือ null กับ undefined
// null เกิดจากการ assign ให้เป็น null
// undefined เกิดจากการไม่ assign value ให้ตัวแปร หรือ property

let a // จะได้ undefined
a = null // ถ้าอยากให้เป็น null ต้อง assign ให้

// อีกอย่างคือ typeof
typeof undefined // ได้ undefined
typeof null // ได้ object

// Type coercion
// อย่างที่เรารู้ว่า Javascript พยายามจะแปลง type ให้กับ input สองตัว
// เมื่อเราใช้ binary operator ระหว่าง input 2 ตัวที่ type ไม่ตรงกัน
// ดังนั้นเรามักจะเห็นพฤติกรรมประหลาดๆ ของ Javascript เช่น

// เครื่องหมาย + มหาภัย
console.log(1 + 2);         // 3   
console.log(2 + 1);         // 3   
console.log('1' + '2');     // '12'
console.log(1 + '2');       // '12'
console.log({} + {});       // '[object Object][object Object]'
console.log([] + []);       // ''  
console.log([] + {});       // [object Object] 
console.log({} + []);       // 0    
console.log(1 + []);        // '1'  
console.log([] + 1);        // '1'  
console.log(1 + {});        // '1[object Object]' 
console.log({} + 1);        // 1    
console.log(1 + null);      // 1    
console.log(null + 1);      // 1    
console.log(1 + undefined); // NaN  
console.log(undefined + 1); // NaN  

// การ compare โดยใช้ ==
// ป.ล.​ จริงๆ แล้วพวกนี้ควรจะ false ให้หมด
console.log('' == '0');          // false
console.log(0 == '');            // true
console.log(0 == '0');           // true
console.log(false == 'false');   // false
console.log(false == '0');       // true
console.log(false == undefined); // false
console.log(false == null);      // false
console.log(null == undefined);  // true
console.log(' \t\r\n ' == 0);    // true

// อันนี้ชอบสุดเลย
// https://gist.github.com/ehudthelefthand/fa5e886ebcf6086ecc4adb41f0ed30e3

// *ประเด็น คือ อย่าพยายามทำ binary operator ข้าม type
// และเราควรใช้ Javascript Linting เพื่อชีวิตที่ดี

// Short-Curcuit
// พฤติกรรมของ && และ || เนี่ย นอกจากจะเราไว้เปรียบเทียบแล้ว
// มันสามารถ return ค่าได้ด้วย

// || ถ้าเกิดว่าตัวแรกเป็น true มันจะไม่ evaluate ตัวที่สอง แล้ว return เลย
// แต่ถ้าตัวแรกเป็น false มันจะ evaluate ตัวที่สองแล้วค่อย return
console.log(null || "user") // 'user'
console.log("Pongneng" || "user") // 'Pongneng'

// สามารถไว้ทำ default value ได้ เช่น

let person = {
    name: "Pongneng",
    age: 31
}

console.log(person.job || "unemployed") // 'unemployed'

person.job = "developer"

console.log(person.job || "unemployed") // 'developer'

// && ถ้าเกิดว่าตัวแรกเป็น false มันจะไม่ evaluate ตัวที่สอง แล้ว return เลย
// แต่ถ้าตัวแรกเป็น true มันจะ evaluate ตัวที่สอง แล้วค่อย return

console.log(null && "user") // null
console.log("Pongneng" && "user") // 'user'

// สามารถมาใช้ทำ guard case ได้

// อันนี้แค่ fake ไว้เฉยๆ นะครับ
function calculateSalary() {
    return 1000;
}

let person = {
    name: "Pongneng",
    age: 31,
    salary: function() {
        if (this.job) {
            return calculateSalary(this)
        }
    }
}

// มีค่าเท่ากับ

let person = {
    name: "Pongneng",
    age: 31,
    salary: function() {
        return this.job && calculateSalary(this)
    }
}