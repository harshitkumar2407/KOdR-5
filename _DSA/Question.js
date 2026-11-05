let arr = [1,2,3,4,5,36,3,76,3,5,8,37,3,5,7,45,6,]
let map = new Map()
let sum = 0
for (let i = 0; i < arr.length; i++) {
    const ele = arr[i];
    map.set(ele, (map.get(ele) || 0) + 1)
}
console.log(map)


for (let i = 0; i < arr.length; i++) {
    const ele = arr[i];
    // if (map.has(ele)) {
    //     map.set(ele,map.get(ele)+1)
    // }else{
    //     map.set(ele,1)
    // }
    map.set(ele, (map.get(ele) || 0) + 1)
}

console.log(map)
