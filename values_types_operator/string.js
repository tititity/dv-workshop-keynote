// String

// ประกาศได้ 3 แบบ

`There is a season for everything`
"There is a time to born and a time to die"
'A time to happy and a time to cry'

// แบบ ` backtick จะ มีหลายๆ line ได้ และสามารถทำ string interpolation ได้
`There is a season 
for everything`

`Half of 100 is ${100/2}.`

// string escape คือการที่เราอยากใส่ค่า พิเศษลงไปใน string
// เช่น อยากให้มี quote ใน string

"\"carpe diem seize the day\" he said"

// อยากขึ้นบรรทัดใหม่ก็ \n
"well this is the end \n I should be one the new line"

// แล้วถ้าอยากได้ blackslash?

"Here is the backslash \\"

// string เอามา concat กันได้

"Look !" + " I'm" + " concating the" + " string"

// String encoding
// อย่างที่เรารู้อยู่แล้วว่า value ใน computer มันมีได้หลาย type ซึ่งแต่ละ type ก็มี 
// bit pattern และ memory block ที่ไม่เหมือนกัน แม้แต่ข้อมูลที่เป็นตัวเลขเหมือนกัน อาจจะมี bit pattern
// และ memory block ต่างกันก็ได้ ถ้าหาก type ไม่เหมือนกัน ยกตัวอย่างตัวเลขใน strong type language พวก Java หรือ Go
// แค่เลขอย่างเดียวเรามีทั้ง int8, int16, int32, uint, inptr and etc.
// ดังนั้น string ก็ไม่ต่างกัน ถึงแม้ตัว เราจะมี string แค่ type เดียวในการ represent string
// แต่ bit pattern และ memory block ของ string ตัวเดียวกันอาจจะไม่เหมือนกันก็ได้
// สิ่งนี้เรียกว่า string encoding
// encoding ฮิตๆ ที่เราน่าจะเคยได้ยินเช่น utf8, ascii, tis620 and etc.

// Unicode

