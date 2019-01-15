//triangle function that receive one input number as the triangle's size
function triangle(size){
    for(let i = 0; i < size; i++){
        let result = '';
        for(let j = 0; j <= i; j++){
            result += '#';
        }
        console.log(result);
    }
}