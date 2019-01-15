// print 1 to 100
for(let i = 1; i <= 100; i++){
    //if the number can be divided by 3 and 5 then print 'FizzBuzz'
    if(i % 3 === 0 && i % 5 === 0){
        console.log('FizzBuzz');
    } 
    else if (i % 5 === 0){ //else if the number can be divided by 5 then print 'Buzz'
        console.log('Buzz');
    } else if (i % 3 === 0){ //else if the number can be divided by 3 then print 'Fizz'
        console.log('Fizz');
    } else { //if the number can not be devided by both 3 and 5 then just print the number
        console.log(i);
    }
}