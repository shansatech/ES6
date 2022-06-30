// Destructuring a objects

const person = {
    firstName: "Satheesh",
    lastName: "M",
    country: "India",
    Qualification: "B.C.A"
}

const { firstName: fn, lastName: ln } = person;

console.log(`${fn}.${ln}`)