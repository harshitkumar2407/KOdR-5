let str:string = ""

for (let  i:number = 7; i > 0; i--) {
    str = ""
    for (let j  = 0; j < i; j++) {
        str += "* "
    }
    console.log(str);
}
console.log();

for (let  i:number = 7; i > 0; i--) {
    str = ""
    for (let j  = 1; j < i; j++) {
        str += j + " "
    }
    console.log(str);
}
console.log();
let n:number = 7
for (let  i:number = 1; i < n; i++) {
    str = ""
    for (let j  = 1; j < n-i; j++) {
        str += i + " "
    }
    console.log(str);
}
console.log();
let sum:number = 1
for (let  i:number = 1; i < n; i++) {
    str = ""
    for (let j  = 1; j < n-i; j++) {
        str += (sum++) + " "
    }
    console.log(str);
}

console.log();
 sum = 0
for (let  i:number = 1; i < n; i++) {
    str = ""
    for (let j  = 1; j < n-i; j++) {
        let ch:string = String.fromCharCode(sum+65)
        str += ch + " "
        sum++;
    }
    console.log(str);
}