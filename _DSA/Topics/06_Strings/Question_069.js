// Question: Given words and a prefix, count how many words begin with that prefix.
let strArr = ["hello"]


var prefixCount = function(words, pref) {
    let count = 0
    for(let i = 0;i < words.length ; i++  ){
        if (words[i].startsWith(pref)) {
            count++
        }
    }
    return count
};

prefixCount(["pay","attention","practice","attend"],"at")

console.log(prefixCount(["pay","attention","practice","attend"],"at"));
