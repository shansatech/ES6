// The For/Of Loop

// For/Of with Arrays

const incomes = [23400, 83200, 25000]
let value = 0;
for (let income of incomes) {
    value += income
}
console.log(value)
// For/Of with Strings

let asianCountry = "Phillipines"

for (let country of asianCountry) {
    console.log(country)
}

// For/Of with Sets

const set = new Set(["one", "two", "three", "four"])

for (let i of set) {
    console.log(i)
}

// For/Of with Maps

let map = new Map();

map.set('State', 'Tamil Nadu');
map.set('Capital', 'Chennai');

for (let [key, value] of map) {
    console.log(key + ' - ' + value)
}

// User defined iterators

// creating iterable object
const iterableObj = {

    // iterator method
    [Symbol.iterator]() {
        let step = 4;
        return {
            next() {
                step--;
                if (step === 3) {
                    return { value: '3', done: false };
                }
                else if (step === 2) {
                    return { value: '2', done: false };
                }
                else if (step === 1) {
                    return { value: '1', done: false };
                }
                else if (step == 0) {
                    return { value: 'Let\'s Go', done: false };
                }
                return { value: '', done: true };
            }
        }
    }
}

// iterating using for...of
for (const i of iterableObj) {
    console.log(i);
}