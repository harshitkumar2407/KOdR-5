function countChar(str,ch) {
    let s = String(str);
    let count = 0

    for (let i = 0; i < s.length; i++) {
        if (s[i] == ch) {
            count++
        }
    }

    
    return count
}

console.log(countChar("javascript", "a"));


