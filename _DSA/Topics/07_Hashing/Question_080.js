// Question: Given an array and target, return indices of two different elements whose values sum
// to the target.

    let nums = [2, 7, 11, 15]
    let target = 9

var twoSum = function(nums, target) {
    let map = new Map()
    for(let i =0;i< nums.length;i++){
        if(map.has(target-nums[i]) ){
            return [i,map.get(target-nums[i])]
        }else{
            map.set(nums[i],i)
        }
    }

};

console.log(twoSum(nums,target))
