let nums = [ 10,20,30,40];

let sum = nums.reduce((acc,i) => acc + i)
 console.log(sum);
 
// 
let fruits = ["apple", "banana", "apple", "orange", "banana",
"apple"]
let obj = fruits.reduce((acc,i) =>{
    if (acc[i]) {
        acc[i]++
    }else 
        acc[i] = 1
    return acc
},{})
console.log(obj);
