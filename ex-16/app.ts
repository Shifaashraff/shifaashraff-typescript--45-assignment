// prepare guest list
let guestList = [ "sahafaq","ashfaq","rabiqa","aqlima"]

// making variable for those who are not come
let dontCome = guestList[0];

// print name of guest who are not come
console.log(dontCome, "will not come");

// add or remove value from guest list
guestList.splice(0, 1, "zobia");

// print message for bigger table
console.log("Good News ! we have found a bigger table for dinner.");

// add value at starting index
guestList.unshift("Ali");

// add value at end index
guestList.push("Hussain");

// get value at middle index
let middleIndex: number = Math.floor(guestList.length/2);

// add value at middle index
guestList.splice(middleIndex, 0, "Anas");

console .log("updated list of our guest");

guestList.forEach(oneguest => console.log(`Assalam aalaikum ${oneguest}, I would like to invite you for dinner`));

// inform that only two guest invited
console.log("unfortunately, the dinner table won't arrive in time. I can only invite two people for dinner.");

// using while-loop to remove guest from array until only two remain
while(guestList.length>2){
    let removedGuest = guestList.pop();
    console.log(`sorry, ${removedGuest} I can't invit you for dinner.`);
}

console.log("invitation to the last two guest");

guestList.forEach(lasttwo => console.log(`luckly, ${lasttwo} you are still invited to the dinner`));

guestList.pop();
guestList.pop();

console.log("empty list:",guestList);
