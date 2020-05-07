function longest(arr) {
  var long1 = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i].length > long1.length) {
      long1 = arr[i];
    } else if(arr[i].length == long1.length) {
      long1 += ("\n" + arr[i])
    } 
  }
  return long1;
  
}


console.log(longest(["once", "upon", "a", "time"]))