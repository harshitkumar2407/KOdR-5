// Question: Given sentences, find the maximum number of words in any one sentence.


function countWords(str) {// alice and bob love leetcode
    let words = str.split(" ")
    let count = 0
    for (let i = 0; i < words.length; i++) {
        const element = words[i];
        if (element.trim() !== "") {
            count++;
        }
    }
    return count
}

// let words = " fasd fasdf fsdf"
let sentences = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"]
let max  = -Infinity
for (let j = 0; j < sentences.length; j++) {
    const words = sentences[j];
    let numOfWords = countWords(words)
    if (numOfWords > max) {
        max = numOfWords
    }
}
console.log(max)
