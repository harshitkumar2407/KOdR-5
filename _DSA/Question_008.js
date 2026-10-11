// Area of triangle by Heron's formula
// (s={a+b+c}/{2})
// Area = Squire_Root_of(s(s-a)(s-b)(s-c))

const input = require("prompt-sync")();

let a = Number( input("input side a "))
let b = Number( input("input side b "))
let c = Number( input("input side c "))

let s = (a+b+c)/2

let Area = Math.sqrt(s*(s-a)*(s-b)*(s-c))
console.log("Area of triangle",Area);




