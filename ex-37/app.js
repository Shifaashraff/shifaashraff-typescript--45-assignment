"use strict";
function describe_city(city, country = 'pakistan') {
    console.log(`${city} is in ${country}`);
}
// Call the function
describe_city('karachi');
describe_city('islamabad');
describe_city('bologa', 'italy');
