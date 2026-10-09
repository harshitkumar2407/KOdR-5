// Question 1
let arr = [1,2,3,4,5,6,7,8,9,10]
arr.splice(5,2)
console.log(arr);

// Question 2
arr.splice(3,0,99)
console.log("Q2",arr);

// Question 3
let arrCopy = arr.slice(1,5)
// Question 4
let Find_Index = arr.indexOf(9)
console.log("find index",Find_Index);

// Question 5
let Check_it_has_value = arr.length > 0
console.log(Check_it_has_value);


// Question 6
let Str = arr.join('.')
console.log(Str);

// Question 7
let arr2 =[4,2,5,7,3,74]
let JoinedArray = arr.join(arr2)
// Question 8
let Copy = [...arr]
console.log(Copy);

// Question 9
let max = Math.max(...arr)
console.log(max);

// Question 10
// let a = 10
// let b = 20

// [a,b] = [b,a]
// console.log(a,b);

