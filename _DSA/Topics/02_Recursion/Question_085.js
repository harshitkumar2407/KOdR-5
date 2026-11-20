// Question: Recursively print integers from 1 through n.

function PrintTillN(n,i=1) {
    if (i==n) {
        return 
    }
    console.log(i);
    return PrintTillN(n,i+1)
}

PrintTillN(10)