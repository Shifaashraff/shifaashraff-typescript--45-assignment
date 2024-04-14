// array in original order
let favCountryName = ["Turkey", "America", "Saudia Arab", "United State", "Brazil"];
console.log("Original Order:",favCountryName);

// array in alphabetical order
console.log("Alphabetical Order:",[...favCountryName].sort());

// still in original order
console.log("still in original order:", favCountryName);

// array in reverse order
console.log("reverse order:",[...favCountryName].reverse());

// still in original order
console.log("still in original order:",favCountryName);

// change the original array order now
console.log("original array reversed:",favCountryName.reverse());

// back to its original order
console.log("back to original order:",favCountryName.reverse());

// sort the array in alphabetical order
console.log("sorted in Alphabetical Order:",favCountryName.sort());

// change the original array order reverse again
console.log("original array order reverse again:",favCountryName.reverse());

