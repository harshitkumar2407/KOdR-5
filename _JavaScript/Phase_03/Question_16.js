function largestNumber(arr) {
    let max = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i]

        }
    }
    return max
}
console.log(largestNumber([1,4,6,3,8,4]));
