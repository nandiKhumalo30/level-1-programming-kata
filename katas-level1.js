function hello(str){
    console.log('Hello ' + str)
 }
 hello("Tshepo")


function evenOrOdd(num){
    if (num % 2 == 0) {
       console.log("even");
    } else {
        console.log("odd")
    }
} 
evenOrOdd(11)


function square(rows) {
    var num = "";
    for (var y = 0; y < rows; y++) {
        for (var x = 0; x < rows; x++) {
                num += "#";
        }
        num += "\n";
    }
    console.log(num)
}
square(4)


function rightHandedTriangle(rows) {
    for (var i = 0; i <= rows; i++) {
        num = '';
        for (let k = 1; k <= i; k++) num += '#';
        console.log(num);   
    }
}
rightHandedTriangle(2);


function isoscelesTriangle(rows) {
    for (let i = 0; i < rows; i++) {
        var num = '';
        for (let j =0; j < rows - i; j++) num += ' ';
        for (let k = 0; k <= i; k++) num += ' #';
        console.log(num);  
    } 
}
isoscelesTriangle(2)


function longest(array){
    var myArray = array[0]
    for(let i = 0; i < array.length; i++){
        if(array[i].length > myArray[i].length){
            console.log(array[i])
        } else if (myArray[i].length > array[i].length){
            console.log(myArray)
        }  
    }
}
longest(["once", "upon", "a", "time"])


function combine(arrOne, arrTwo){
    var combinedArray = []
    combinedArray.push(...arrOne, ...arrTwo)
    for (i = 0; i > combinedArray; i++) {
        arrOne[i] += arrTwo[i]
    }
    return combinedArray
}
console.log(combine([11,22,33], [1,2,3]))


function frame(array){
    let stars = "*********"
    console.log(stars)
    for(let i = 0; i < array.length; i++){
        let star = "* "
        let list = star + array[i] + "\t" + star
        console.log(list)
    }
    console.log(stars)
}
frame(["Write", "good", "code", "every", "day"])