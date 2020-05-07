function squareTwo (rows) {
    var num = "";
    for (var y = 0; y < rows; y++) {
        for (var x = 0; x < rows; x++) {
                num += "#";
        }
    num += "\n";
}
console.log(num)
}
squareTwo(2)