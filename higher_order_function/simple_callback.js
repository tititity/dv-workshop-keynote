// Callback
// คือการ pass function เข้าไปให้อีก function นึงเป็นคน execute

function load_data(callback) {
    // .. load some data
    let data = {}
    callback(data)
}

// หรือ callback ที่ส่งให้ browser เป็นคน call ก็ได้
// mouse_callback.html

// หรือ callback ที่ใช้ใน array function ต่างๆ เช่น sorting
// ex. sort.js