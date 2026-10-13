let prompt = require("prompt-sync")();

// let length = Number(prompt("Num of input"))

// let arr = Array(length)
// let sum = 0
// for (let i = 0; i < length; i++) {
//     let inp = Number(prompt())
//     sum += inp
//     arr[i] = inp
// }
// console.log(arr,sum);

// let arr = [1,2,3,4,55,1,2,4,7,6]
// let max = arr[0]
// let secMax = max
// let min = arr[0]
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < max && secMax < arr[i]) {
//         secMax = arr[i]
//     }
//     if (max < arr[i]) {
//         secMax = max
//         max = arr[i]
//     }
//     if (min > arr[i]) {
//         min = arr[i]
//     }
// }
// console.log(max,secMax, min);

let Array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let k = 3;
let first;
for (let j = 0; j < k; j++) {
    first = Array[0];

    for (let i = 0; i < Array.length - 1; i++) {
        Array[i] = Array[i + 1];
    }
    
    Array[Array.length - 1] = first;
}

console.log(Array);
