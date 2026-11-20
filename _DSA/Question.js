// let arr = [1,2,3,4,5,36,3,76,3,5,8,37,3,5,7,45,6,]
// let map = new Map()
// let sum = 0
// for (let i = 0; i < arr.length; i++) {
//     const ele = arr[i];
//     map.set(ele, (map.get(ele) || 0) + 1)
// }
// console.log(map)


// for (let i = 0; i < arr.length; i++) {
//     const ele = arr[i];
//     // if (map.has(ele)) {
//     //     map.set(ele,map.get(ele)+1)
//     // }else{
//     //     map.set(ele,1)
//     // }
//     map.set(ele, (map.get(ele) || 0) + 1)
// }

// console.log(map)
// let heights = [30, 20, 50, 10, 40]

// function minCost(heights,i=0,sum=0) {
//     if (heights.length-1==i) {
//         return sum
//     }
//     let firstElement  = Math.abs(heights[i]-heights[i+1])
//     let secElement  = Math.abs(heights[i]-heights[i+2])
//     sum +=  firstElement > secElement ? secElement:firstElement
//     return minCost(heights,i+1,sum)

// }

// console.log(minCost(heights));


// const table = new Array(5);

// function hash(key) {
//     return key.length % 5;
// }

// function insert(key) {
//     const index = hash(key);

// if (table[index] === undefined) {
//     table[index] = [];
// }

// table[index].push("apple");
// }

// insert("banana")
// insert("kiwi")
// insert("grape")
// insert("pear")
// insert("orange")
// insert("peach")
// insert("plum")
// insert("mango")
// insert("papaya")
// insert("watermelon")
// insert("pineapple")
// insert("strawberry")
// insert("blueberry")
// insert("raspberry")
// console.log(table);

// // console.log(table);

	// Print numbers from N to 1

    // function printNumbers(n) {
    //     if (n === 0) {
    //         return;
    //     }
    //     console.log(n);
    //     printNumbers(n - 1);
    // }

    // printNumbers(5); // Output: 5, 4, 3, 2, 1
    // // 	Calculate the power of a number

    // function power(base, exponent) {
    //     if (exponent === 0) {
    //         return 1;
    //     }
    //     return base * power(base, exponent - 1);
    // }

    // console.log(power(2, 3)); // Output: 8


    // function count(num,count=0) {
    //     if (Math.floor(num%10) == 0) {
    //         return count
    //     }

    //     return count(Math.floor(num / 10),count+1)
    // }

    // console.log(count(43256));
    

//     function Reverse(num,rev=0){
//         let n = num%10
//         if (Math.floor(rev/10) == 0 ) {
//             return rev
//         }
        
//         return Reverse(Math.floor(num/10),(rev*10) + (num%10))

//     }
// console.log(Reverse(1234567));


// function Reverse(num, rev = 0) {

//     if (num === 0) {
//         return rev;
//     }

//     return Reverse( Math.floor(num / 10),   (rev * 10) + (num % 10) );
// }

// console.log(Reverse(1234567)); // 7654321

// let ar = [1,2,3,4,5]
// let newArr = ar.splice(ar.length,1)
// console.log(newArr);





// function ArraySum(arr,sum=0) {
//     if (arr == null) {
//         return sum
//     }
//     console.log(arr,sum);
    
//     return ArraySum(arr.pop(),arr[arr.length - 1]+sum )
// }

// console.log(ArraySum([1,2,3,4,5,6]));
let arr = [1,2,4,5,8,4]
let t = 11; 
if(arr[0]== t){
    return 1;
} 
let arrSum = Array(arr.length);
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i]
    arrSum[i] = sum;
}
let l = 0;
let r = 1;
let sumArrSum = 0 
for (let i = 0; i < arrSum.length; i++) {
    if (arrSum[r] >= t) {
        sumArrSum = arrSum[i] - arrSum[r];
        l++;
    }else{
        r++;
    }
    console.log(l + " " + r +" ");
}
console.log(arrSum);
