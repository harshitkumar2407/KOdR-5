let names = ["anubhav","rahul","aman"];
let nameUpper = names.map((i) => i.toUpperCase())

console.log(nameUpper);

// Hard Question
let products =[
    {name:"Laptop",price:50000},
    {name:"Phone",price:20000},
    {name:"tablet", price:20000}
]

products.forEach(i => {
    i.discountPrice = i.price * .9
});
console.log(products);

