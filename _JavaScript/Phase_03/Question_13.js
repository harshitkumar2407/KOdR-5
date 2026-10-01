function isPalindrome(str) {
    let newStr = ""
    for (let i = 0; i  < str.length; i++) {
        newStr = str[i] + newStr
        
    }
    return str == newStr ? true : false
}

console.log(isPalindrome("hello"));
console.log(isPalindrome("madam"));
