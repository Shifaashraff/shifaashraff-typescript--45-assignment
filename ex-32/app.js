"use strict";
// number list
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let num of nums) {
    let originalending;
    if (num === 1) {
        originalending = "st";
    }
    else if (num === 2) {
        originalending = "nd";
    }
    else if (num === 3) {
        originalending = "rd";
    }
    else {
        originalending = "th";
    }
    console.log(num + originalending);
}
