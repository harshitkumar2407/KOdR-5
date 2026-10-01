function countProperties(obj) {
    return Object.keys(obj).length
}

const obj = {
    name:"Harshit",
    age: 24,
    course:"KODR 5",

}
console.log(obj,countProperties(obj));


