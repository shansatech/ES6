// Default params

/*
function add(numArray) {
    let total = 0;
    numArray.forEach((element) => {
        total += element
    })

    console.log(total)
}

add()
*/

// Incase when console.log, it passes an error "TypeError: Cannot read properties of undefined (reading 'forEach')"

// Solution

// We need to default params to avoid error and get some results.

function add(numArray = []) {
    let total = 0;
    numArray.forEach((element) => {
        total += element
    })

    console.log(total)
}

add()