// Question: Find the greatest element in a non-empty array.

let arr = [1,2,3,4,5,6,7,8,8,7,655,33,2,32,3,1,21]

let max = arr[0]

for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    max = Math.max(element,max)
}
console.log(max);
