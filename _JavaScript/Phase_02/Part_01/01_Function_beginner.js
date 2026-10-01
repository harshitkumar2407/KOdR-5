// 1
function greet() {
    console.log("Hello World");   
}
// 2
function add(a,b) {
    return a+b
}
// 3
function square(num) {
    return num * num
}
// 4
function checkEvenOdd(n) {
    if (n % 2 == 0) {
        return "even"
    }
    return "odd"
}
// 5
function CelsiusToFahrenheit(C) {
    return (C * 1.8)+32
    
}
// 6
function GreetTheUser(user="Guest") {
    console.log(`Wellcome to the Universe ${user}`);
}
// 7
function GreaterInTwo(a,b) {
    if (a>b) {
        return a
    }
    return b
}
// 8
function AreaOfRectangle(length,breadth) {
    return length*breadth
}
// 9
function AdultOrMinor(age) {
    if (age >= 18) {
        return "Adult"
    }
    return "Minor"
}
// 10
function reverse_a_string(str) {
    let newStr =""
    for (let i = 0; i < str.length; i++) {
        newStr = newStr + str[i]
    }
    return newStr
}


console.log(reverse_a_string("hello"));

// greet()
// GreetTheUser()
// GreetTheUser("Harshit")