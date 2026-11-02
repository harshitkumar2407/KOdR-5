// Question: Given the sides of a valid triangle, calculate its area using Heron's formula.

const input = require("prompt-sync")();

let a = Number( input("input side a "))
let b = Number( input("input side b "))
let c = Number( input("input side c "))

let s = (a+b+c)/2

let Area = Math.sqrt(s*(s-a)*(s-b)*(s-c))
console.log("Area of triangle",Area);




