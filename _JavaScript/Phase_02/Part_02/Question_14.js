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
