let size = 0,
    result = "";

function chessboard(size) {
    for (var i = 0; i < size; i++) {
        for (var j = 0; j < size; j++) {
            if ((j % 2 === 0 && i % 2 === 0) || (j % 2 === 1 && i % 2 === 1)) {
        result += " ";
    } else {
        result += "#"; 
    }
        }
        result += "\n";
    }
    console.log(result);
}

//credit: https://codereview.stackexchange.com/questions/165205/print-a-chessboard