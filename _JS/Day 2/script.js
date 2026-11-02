// 

function add(a) {
    return (b) => {
        if (b != undefined) {
            add(b)
        }
        return a
    }
}

console.log(add(1));
console.log(add(1)(2));
console.log(add(1)(2)(3));
console.log(add(1)(2)(3)(4));
