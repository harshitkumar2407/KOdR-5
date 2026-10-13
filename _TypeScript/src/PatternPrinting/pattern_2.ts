let str:string = ""

for (let i = 0; i < 6; i++) {
    str = ""
    for (let j = 0; j < 6; j++) {
        str += "* "
    }
    console.log(str);
}

console.log();

str = ""
for (let i = 1; i < 6; i++) {
    str = ""
    for (let j = 1; j < 6; j++) {
        str +=  j+" "
    }
    console.log(str);
}
console.log();

str = "ABCDE"
let str1:string = ""


for (let i:number = 0; i < 6; i++) {
    str1 = ""
    for (let j:number = 65; j < 70; j++) {
        let ch:string = String.fromCharCode(j)
        str1 += ch + " " 
    }
    console.log(str1);
}