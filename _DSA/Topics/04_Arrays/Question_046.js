// Question: Given an array, calculate and display the sum and arithmetic mean of its elements.

let arr = [1,2,4,5,7,9,4,6,2,6,65,38,]
let sum = 0 
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    sum += element
    
}

let mean = sum/arr.length
console.log(sum,arr.length,mean);

