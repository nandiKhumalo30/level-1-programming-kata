var frame = (["Write","good","code","every","day"]);
var star = "*";
var space = " ";
function frameWithText(arr) {
    var text = " ";
    for (let i = 0; i <arr.length; i++) {
        if (arr[i].length > text.length) {
            text = arr[i].length
        }
    }
}
var textLength = text + 4;
for (var i = 0; i < arr.length; i++) {
    spaceTwo = text - arr[i].length +1;
    spaceStar =  space.repeat(spaceTwo) + star;
    spaceThree = star + space;
    console.log(spacehash + arr[i] + spaceStar)
}
console.log(star.repeat(textLength))
frameWithText(frame)