"use strict";
function createCar(manufacturer, model, ...extras) {
    const car = { manufacturer, model };
    extras.forEach(([key, value]) => {
        car[key] = value;
    });
    return car;
}
const myCar = createCar("ferrari", "crolla", ["color", "white"], ["year", 2022]);
console.log(myCar);
