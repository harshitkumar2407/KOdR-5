// Question: Given a range of integers, calculate the even-number sum and odd-number sum
// separately.


let start = 10;
let end = 50;

let OddSum = 0
let EvenSum = 0


for (let i = 10; i <= end; i++) {

    if (i%2==0) EvenSum += i
    if (i%2==1) OddSum += i
}
console.log(OddSum,EvenSum);
