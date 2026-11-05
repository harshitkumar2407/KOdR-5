// Question: Count the frequency of every distinct value in an array.

let arr = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5]
let map = new Map()
for (let i = 0; i < arr.length; i++) {
    const ele = arr[i];
    if (map.has(ele)) {
        map.set(ele, map.get(ele) + 1)
    } else {
        map.set(ele, 1)
    }
}

console.log(map)
for (let i = 0; i < arr.length; i++) {
    const ele = arr[i];
    map.set(ele, (map.get(ele) || 0) + 1)
}

console.log(map)