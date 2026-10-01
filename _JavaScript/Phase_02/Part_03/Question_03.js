

// INTERMEDIATE QUESTION
let nums = [1,2,3,4,5,6,7,8];

let even = nums.filter((i) => i%2==0)

console.log(even);


// HARD QUESTION
let users = [
    {name:"anubahv",active:true},
    {name:"Rahul",active:false},
    {name:"Aman",active:true}
]
let activeUser = users.filter((i) => i.active == true)
console.log(activeUser);
