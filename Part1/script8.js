// Coding challenge

/*
function addressMaker(address) {
    const newAddress = {
        city: address.city,
        state: address.state,
        country: "India"
    }
}

addressMaker({city: "Chennai", state: "Tamil Nadu"})

*/

// Solution:

function addressMaker(address) {
    const { city, state } = address;
    const newAddress = {
        city,
        state,
        country: 'India'
    }
    console.log(`${newAddress.city}, ${newAddress.state}, ${newAddress.country}`)
}
addressMaker({ city: 'Chennai', state: 'Tamil Nadu' })