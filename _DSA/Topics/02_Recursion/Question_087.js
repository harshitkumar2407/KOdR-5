// Question: Recursively calculate the sum of the first n natural numbers.

function sum_of_n_numbers(n,sum=0) {
    if (n==0) {
        return sum
    }
    sum = n +sum
    console.log(n,sum);
    
    return sum_of_n_numbers(n-1,sum)
}

let s= sum_of_n_numbers(10)
console.log(s);
