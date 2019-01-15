let size = 0,
    result = "";

function chessboard(size) {
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) { 
            //if the position on chessboard is even row & column or odd row & column print ' '
            if ((j % 2 === 0 && i % 2 === 0) || (j % 2 === 1 && i % 2 === 1)) {
        result += " ";
    } else {
        result += "#"; 
    }
        }
        //enter new line
        result += "\n";
    }
    //show the result
    console.log(result);
}
//credit: https://codereview.stackexchange.com/questions/165205/print-a-chessboard