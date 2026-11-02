// **Easy — Q1: Find the largest number**

// - Input: `[4, 9, 2, 7]`
// - Expected output: `9`
// - Constraint: do not use sorting or `Math.max(...arr)`.
// - Hint: keep the largest value seen so far while looping through the array.

// let arr = [4,9,2,7]

// let max = arr[0]
// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     if (element > max) {
//         max = element
//     }
// }
// console.log(max);


// **🟡 Medium — Q2: Character frequency**
// - Input: `"banana"`
// - Expected counts: `b: 1`, `a: 3`, `n: 2`
// - Hint: use an object or `Map`; handle the first occurrence separately from later occurrences.

// let str = "banana"
// let map = new Map()
// for (let i = 0; i < str.length; i++) {
//     const element = str[i];
//     console.log(element,i);
//     if(map.has(element)){
//         map.set(element,map.get(element)+1)
//     }else{
//         map.set(element,1)
//     }
// }
// console.log(map);


let nums = [2,7,11,15]
let target = 9
let map = new Map()
for (let i = 0; i < nums.length; i++) {
    const ele = nums[i];
    if (map.has(target - ele)) {

    }
}
