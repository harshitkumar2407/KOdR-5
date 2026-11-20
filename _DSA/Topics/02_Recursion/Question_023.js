// Question: Given a non-negative integer n, calculate n!; define 0! as 1.


function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

console.log(factorial(5)); // Output: 120
console.log(factorial(0)); // Output: 1