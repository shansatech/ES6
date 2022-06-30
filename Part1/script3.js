// Arrow Function

// Difference between Function and Arrow Function

// Normal Function
console.log(newFunction(1, 5))
function newFunction(a, b) {
    return a + b;
}

// Arrow Function

/*  
    Arrow functions are not hoisted. They must be defined before they are used.
*/

// console.log(newFunc(1, 5)) --> ReferenceError: newFunc is not defined
newFunc = (a, b) => a + b;
console.log(newFunc(3, 7));





