let nums = [1,32,53,64,85,36,77,82,96,10]
// Question 1
// nums.forEach(())

// Question 2
let sqrt = nums.map(n => n * n )
console.log(sqrt);

// Question 3
let even  = nums.filter(n => n%2==0)
console.log(even);

// Question 4
let sum = nums.reduce((sum,n) => sum+n)
console.log(sum);

// Question 5
let max = nums.reduce((max,n) => n > max ? n :max)
console.log(max);

// Question 6
let First_even_no = nums.find(n => n%2==0)
console.log(First_even_no);

// Question 7
let Greater_then_50 = nums.findIndex(n => n > 50)
console.log("Q7",Greater_then_50);


// Question 8
let Negative_no = nums.some(n => n < 0)
console.log("Q8",Negative_no);

// Question 9
let All_Positive_no = nums.every(n => n < 0)
console.log("Q9",All_Positive_no);

// Question 10
let Names = ["harshit","raj","rohit","rohan","dheeraj"]
Names = Names.map(i => i.toUpperCase())
console.log(Names);

// Question 11

// Question 12
let average = (nums.reduce( (sum,n) => sum + n))/nums.length
console.log(average);
// Question 13

// Question 14
let nestedArr = [1,2,3,4,[4,5,6,7,[8,9,10,[11,12,13,14,15,16]]]]
let nestedArr_flat = nestedArr.flat(Infinity)
console.log(nestedArr_flat);

// Question 15


// Question 16
// Question 17
// Question 18
