let arr = [32,43,56,78,34,89,322,658,56,34,32]

arr.sort((a,b) => a-b )
console.log(arr);

// Hard 
arr.sort((a,b) => (a%2) - (b%2))
console.log(arr);