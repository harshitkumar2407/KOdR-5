


    // ES5-
// function expression
function add1(a, b) {
    return a + b;
}

console.log(add1(2, 3));

// function statements
const add2 = function(a, b) {
    return a + b;
};

console.log(add2(2, 3));
// anonymus function
// function() {
//     console.log("Hello");
// }

// es6
// new version
// Short form
const add3 = (a, b) => {
    return a + b;
};
const add4 = (a, b) => a + b;

// arrow fuction
// iffe
(function() {
    console.log("Hello");
})();
(function() {
    console.log("Hello");
})();

