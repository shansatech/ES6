// let and const

if (false) {
    let example = 5; // example defined within block scope
}

console.log(example) // example not defined out of scope

const integer = 5;
integer = 6 // cannot change const value
console.log(integer)