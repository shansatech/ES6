// padStart() & padEnd()

let name = "Satheesh"
let length = 0
let mask = "*"
console.log(name.padStart(10, "*"))
console.log(name.padEnd(10, "*"))

function maskNumber() {
    console.log(`${name}`.slice(-length).padEnd(`${name}`.length, mask))
}
maskNumber()