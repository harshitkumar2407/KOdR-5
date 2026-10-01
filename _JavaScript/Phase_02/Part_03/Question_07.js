let nums = [10,20,-5,40];

console.log(nums.some((i) => i < 0 ));

// Hard Question
let products =[
    {name:"Laptop",stock:5},
    {name:"Phone",stock:0},
]
console.log(products.some((i) => i.stock <= 0));
