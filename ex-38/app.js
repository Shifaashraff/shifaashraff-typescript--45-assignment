"use strict";
function citieCountry(city, country = "pakistan") {
    return `${city},${country}`;
}
const city1 = citieCountry("karachi");
const city2 = citieCountry("dehli", "india");
const city3 = citieCountry("istanbul", "turkey");
console.log(city1);
console.log(city2);
console.log(city3);
