// Question: Given n, calculate and display the sum of the first n natural numbers.

let sum  = 0

for (let index = 0; index < n; index++) {
    sum += index
}
console.log(sum);


let arr = [1,2,3,4,5,6,7,8,9,10]
let ArrSum = 0
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    ArrSum += element;
}
console.log(ArrSum);
