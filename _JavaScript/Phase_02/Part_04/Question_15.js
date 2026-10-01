const arr = ["name", "Anubhav", "age", 24]
let obj = {}
for (let index = 0; index < arr.length; index = index + 2) {
    obj[arr[index]] = arr[index+1]
}
console.log(obj);
