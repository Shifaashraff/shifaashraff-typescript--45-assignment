let guestList =["shafaq","Ashfaq","rabiqa","aqlima"];

let dontCome = guestList[0];

console.log(dontCome,"will not come.");

guestList.splice(0, 1,"zobia");

guestList.forEach(guest=> console.log(`salam ${guest} , I would like to invite you dinner with me.`));