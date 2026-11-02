// Question: Capitalize the first and last character of each word in a sentence.


function capataliseFirstAndLast(word){
    let firstChar = word[0].toUpperCase()
    let lastChar = word[word.length - 1].toUpperCase()
    let middle =  word.slice(1,word.length-1)

    return firstChar+middle+lastChar
}

let words =["pay","attention","practice","attend"]
let updated = words.map(capataliseFirstAndLast);
console.log(updated);
