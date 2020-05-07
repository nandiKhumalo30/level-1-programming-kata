var arrOne = [];
var arrTwo = [];
function combine(arrOne, arrTwo){
    var combinedArray = []
    combinedArray.push(...arrOne, ...arrTwo)
    for (i = 0; i > combinedArray; i++) {
        arrOne[i] += arrTwo[i]
    }
    return combinedArray
}
console.log(combine([11,22,33], [1,2,3]))