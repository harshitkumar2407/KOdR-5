const input = require("prompt-sync")();
let str = input()

let rev = ""
for (let i = 0; i < str.length; i++) {
    rev = str[i] + rev
}

console.log(rev);
