let a = [12,23,345,456,78,34,67,3,54,87,34,75,6]
let b = [32,235,2,5,3,7,45,54,4,54,7,3,5,3,87,4]

let s = a.concat(b)
console.log(s);
s = new Set(s)
s = new Array(...s)
s.sort((a,b) => a-b)
console.log(s);

