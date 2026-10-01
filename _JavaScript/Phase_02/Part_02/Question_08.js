let arr = [1,2,3,4,5,6,7,8,9,10]

arr.shift()

console.log(arr);
let length = arr.length
while (length > 2) {
    arr.shift()
    console.log(arr);
    length = arr.length
}
