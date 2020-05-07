function isoscelesTriangle(rows) {
    for (let i = 0; i < rows; i++) {
        var num = '';
        for (let j =0; j < rows - i; j++) num += ' ';
        for (let k = 0; k <= i; k++) num += ' #';
        console.log(num);  
    } 
}

isoscelesTriangle(2)
