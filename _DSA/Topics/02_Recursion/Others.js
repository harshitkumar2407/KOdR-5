

// function print(n) {
//     if (n==0) {
//         return 0
//     }
//      print(n-1)
//     console.log(n);
// }
// print(10)
// function print(n,i=0) {
//     if (i >=n) {
//         return 0
//     }
//     console.log(i);
    
//     return print(n,i+1)
// }

// function Sum(n,sum=0){
//     if (n<1) {
//         return sum
//     }

//     return Sum(n-1,sum+n)
// }

// console.log(Sum(10));

// function factorial(n,fa=1) {
//     if (n<=0) {
//         return fa;
//     }
//     console.log(n,fa);
    
//     return factorial(n-1,fa*n)
// }

// console.log(factorial(5));

// function Sum(n){
//     if (n==1 || n==0 ) 
//         return n;

//     console.log(n);
    
//     return Sum(n-1)+Sum(n-2)
// }
// console.log(Sum(30));





function fun(a,b,count = 0){
    if (a==b) {
        return a
    }
    let max = Math.max(a,b)
    let min = Math.min(a,b)
    console.log(count);
    
    return fun(max-min , min,count+1)
}
// console.log(fun(100,97));

fun(100,94)