// Arrow Functions

/*
function add(...nums) {
    let total = nums.reduce(function (x,y) {
        return x+y;
    });

    console.log(nums)
}

add(2, 4, 6, 7, 8, 12, 90)
*/

function add(...nums) {
    let total = nums.reduce((x, y) => x + y)
    console.log(total)
}

add(2, 4, 6, 7, 8, 12, 90)