// Question: Recursively calculate n!, defining 0! as 1.


function factorial(n,m=1) {
    if (n==0) {
        return 1
    }
    console.log(n,m);
    
    return factorial(n-1,m*n)
}
 
factorial(5)