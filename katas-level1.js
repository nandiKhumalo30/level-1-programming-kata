function hello(str){
    console.log(`Hello ${str}!`)
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

function square(num){
    let str;
    for(let i = 0; i < num; i++){
        str = '#'.repeat(num);
        console.log(str);
    }
}
square(2);


function rightHandedTriangle(num){
    let str = '';
    for(let i = 0; i < num; i++){
        str += '#';
        console.log(str);
    }
}        
rightHandedTriangle(2);


function isoscelesTriangle(num){
    let str;
    for(let i = 0; i < num; i++){ 
        str = ' '.repeat(num - i) + '#'.repeat(i+i+1) + ' '.repeat(num - i);
        console.log(str);
    }
}        
isoscelesTriangle(2);

function longest(arr){
    let count
    let newArr = []
    for(let i = 0; i < arr.length; i++){
        count = arr[i].length
        newArr.push(count)
    } 
    let checkMaxNum = Math.max(...newArr)
    for(let j = 0; j < arr.length; j++){
        if(checkMaxNum === arr[j].length){
            console.log(arr[j])
        } 
    }
}
longest(['once', 'chicken', 'a', 'time'])

function combine(a,b){
    let arr = [];
    let arr2 = [];
    for(let i = 0; i < a.length ||i < b.length; i++){
        arr = [a[i],b[i]];
        arr2.push(arr);
    }
    let str = arr2.join(','); 
    let arr3 = str.split(',');
    let arrNum;
    let arr4=[];
    for(let j = 0; j < arr3.length; j++){
        arrNum = parseInt(arr3[j]);
        arr4.push(arrNum);

    }
    console.log(arr4);         
    
}
combine([11,22,33], [1,2,3]);

function frame(arr){
    let star = '*'
    let space = ' '
    let count
    let newArr = []
    let list
    for(let i = 0; i < arr.length; i++){
        count = arr[i].length
        newArr.push(count)
    } 
    let checkMaxNum = Math.max(...newArr)
    console.log(star.repeat(checkMaxNum + 2))
    for(let j = 0; j < arr.length; j++){
        list = star + arr[j] + space.repeat(checkMaxNum-arr[j].length) + star
        console.log(list)
    }
    console.log(star.repeat(checkMaxNum + 2))    
}
frame(["Write", "good", "code", "every", "day"])
