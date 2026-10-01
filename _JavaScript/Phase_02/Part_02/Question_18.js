let nums = [1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1]

for (const i of nums) {
    console.log(i);
}

let names = "Harshit Kumar"
let vowels = "aeiouAEIOU"
let count = 0
for (const i of names) {
    if (vowels.includes(i)) {
        count++;
    }
}
console.log(count);
