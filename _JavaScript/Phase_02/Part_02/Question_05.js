let arr =  [1,2,3,4,5,6,7,8,9,10]
arr.push(12)
arr.push(34)
arr.push(45)

console.log(arr);

let newArr =[];
for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i])
}

console.log(newArr);
