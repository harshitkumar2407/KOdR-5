// Question: Return the nth Fibonacci number, with F(0)=0 and F(1)=1.

function Fibonacci(n) {
    if (n <= 1) {
        return n;
    }

    return Fibonacci(n - 1) + Fibonacci(n - 2);
}

console.log(Fibonacci(3)); // 2
console.log(Fibonacci(5)); // 5
console.log(Fibonacci(7)); // 13