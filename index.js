const coffeeData = require('./coffee_data.js');


// Print an array of all the drinks on the menu.
//console.log(coffeeData.map((item) => item.name));

// Print an array of drinks that cost 5 and under.
//console.log(coffeeData.filter((item) => item.price <= 5));

// Print an array of drinks that are priced at an even number.
//console.log(coffeeData.filter((item) => item.price % 2 === 0));

// Print the total if you were to order one of every drink.
//console.log(coffeeData.reduce((total, cost) => total += cost.price, 0));

// Print an array with all the drinks that are seasonal.
//console.log(coffeeData.filter((item) => item.seasonal));

// Print all the seasonal drinks with the words "with imported beans" after the item name.
    // For example: "affogato with imported beans".
const seasonalCoffee = coffeeData.filter((item) => item.seasonal);

console.log(seasonalCoffee.map((item) => item.name +  ` with imported beans`)); 