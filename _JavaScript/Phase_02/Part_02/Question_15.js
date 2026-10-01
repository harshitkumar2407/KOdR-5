let names = ["harshit","rahul","raj","akash"]

console.log(names.indexOf("raj"));


let nums = [1,2,5,3,43,5,65,5,78,5,3,5,4,263,25,56,237,25,5,3,46,2,4]

let indexOf_5 =[]
for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 5) {
        indexOf_5.push(i)
    }
}

console.log(indexOf_5);




let a1 = ["banana","peach","grapes","apple","pineapple"]
let a2 = ["banana","peach","grapes","apple","pineapple"]
console.log(a1.includes("apple"));

function checkAllArray(a1,a2) {
    for (let i = 0; i < a1.length; i++) {
        if (a1.length != a2.length) {
            return false
            break;       
        }
        if (!a1.includes(a2[i])) {
            return false
        }
    } 
    return true
}
console.log(checkAllArray(a1,a2));
