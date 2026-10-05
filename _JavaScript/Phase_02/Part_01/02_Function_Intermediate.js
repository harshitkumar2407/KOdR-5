// 1

// 2

// 3
function Sum_all(...num) {
    let nums = [...num]
    let sum = 0
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
    }
    return sum
}
// console.log(Sum_all(1,2,3,4));

// 4
function CountVowels(str) {
    let vowels = "aeiouAEIOU"
    let count = 0
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }
    return count
}
// console.log(CountVowels("hello sir how are you"));
// 5
function palindrome_or_not(str) {
    let newStr = ""
    for (let i = 0; i < str.length; i++) {
        newStr = str[i] + newStr
    }
    return str == newStr ? true : false
}
// palindrome_or_not("hello")
// 6
setTimeout(() =>{
    console.log("hello");
    
},2000)
// 7
function Higher_Order_function() {
    function Welcome(params) {
        console.log("Hello User ,Good to have you");
    }
    Welcome()
    Welcome()
}
// 8
function father() {
    return () => {
        console.log("good moring");
    }
}

// 9

// 10
