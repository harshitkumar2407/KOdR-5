const input = require("prompt-sync")();
let str = input()

let left = 0
let right = str.length
let isPalendrome = true
while (left < right) {
    if (str[left] != str[right]) {
        isPalendrome= false
        break;
    }
    left++;
    right--;
}

if (isPalendrome) {
    console.log("Palendrome");
}else{
    console.log("not a Palendrome");
}

