function ArraySum(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
        
    }
    return sum 
}

let arr = [24,46,757,96,45,67,3]

console.log(ArraySum(arr));
