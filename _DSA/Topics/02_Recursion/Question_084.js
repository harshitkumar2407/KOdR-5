// Question: Given a name and n, recursively print the name n times.


function printNtime(name,n) {
    if (n==0) {
        return 
    }
    console.log(name);
    
    return printNtime(name,n-1)
}

printNtime("Harshit",10)