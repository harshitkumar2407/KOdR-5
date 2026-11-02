// Count Character Frequency: Given banana, count each character using a Map.

// let str = "banana"
// let map = new Map()

// for (let i = 0; i < str.length; i++) {
//     const ele = str[i];
//     if (map.has(ele)) {
//         map.set(ele,map.get(ele) + 1 )
//     }else{
//         map.set(ele,1)
//     }
// }
// console.log(map);

// Reverse an Array: Reverse an array in place without using reverse().

// let arr = [1,2,3,4,5,6,7,8,9,0]
// let left = 0
// let right = arr.length-1

// while (right > left) {
//     [arr[left],arr[right]] = [arr[right],arr[left]]
//     left++;
//     right--;
//     console.log(arr,left,right);

// }
// console.log(arr);





// Contains Duplicate: Return true if an array contains a repeated value.
// let arr = [1,2,23,4,5,6,7,8,9]
// let isDuplicate = false
// let map1 = new Map()

// for (let i = 0; i < arr.length; i++) {
//     const ele = arr[i];
//     if(map1.has(ele)) {
//         isDuplicate = true;
//         break;
//     }else{
//         map1.set(ele,1)
//     }
// }
// console.log(map1,isDuplicate);


// Two Sum: Return indices of two numbers that add up to a target; aim for O(n) using a Map.

// let arr = [0,1,2,3,4,5,6,9,7,7,8,9,0]
// let target = 7
// let map = new Map()

// for (let i = 0; i < arr.length; i++) {
//     const ele = arr[i];
//     if (map.has(target-ele)) {
//         console.log(i,map.get(target - ele));
//         break;
//     }else{
//         map.set(ele,i)
//     }
// }

// Longest Substring Without Repeating Characters: Find the longest substring with unique characters using sliding window.


function lengthOfLongestSubstring(s) {
    let set = new Set();
    let left = 0;
    let maxLength = 0;

    for (let right = 0; right < s.length; right++) {

        while (set.has(s[right])) {
            set.delete(s[left]);
            left++;
        }

        set.add(s[right]);

        maxLength = Math.max(
            maxLength,
            right - left + 1
        );
    }

    return maxLength;
}

console.log(lengthOfLongestSubstring("abcabcbb")); // 3
console.log(lengthOfLongestSubstring("bbbbb"));    // 1
console.log(lengthOfLongestSubstring("pwwkew"));   // 3
console.log(lengthOfLongestSubstring("abcdef"));   // 6
console.log(lengthOfLongestSubstring(""));         // 0
