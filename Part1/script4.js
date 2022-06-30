// The For/In Loop

/* 
    You should not use for...in to iterate over an array where the index order is important.
*/

let Employee = {
    EmpId: 345,
    Name: "Satheesh.M",
    Role: "Software Developer",
    Experience: "6 months"
}

for (let key in Employee) {
    console.log(`${key} => ${Employee[key]}`)
}

const salaries = {
    Jack: 24000,
    Paul: 34000,
    Monica: 55000
}

// Update Values of Properties

// using for...in
for (let i in salaries) {

    // add a currency symbol
    let salary = "$" + salaries[i];

    // display the values
    console.log(`${i} : ${salary}`);
}