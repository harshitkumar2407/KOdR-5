let str:string = ""

for (let i = 0; i < 5; i++) {
    str = ""
    for (let j = 0; j <= i; j++) {
        str += "*"
    }
    console.log(str);
}
console.log();

str = ""
for (let i = 1; i < 6; i++) {
    str = ""
    for (let j = 1; j <= i; j++) {
        str += i 
    }
    console.log(str);
}
console.log();
str = ""
for (let i = 1; i < 6; i++) {
    str = ""
    for (let j = 1; j <= i; j++) {
        str += j 
    }
    console.log(str);
}
console.log();

str = ""
let sum:number= 0
for (let i = 1; i < 7; i++) {
    str = ""
    for (let j = 0; j < i; j++) {
        sum++
        str += (sum) + " "
    }
    console.log(str);
}
console.log();


