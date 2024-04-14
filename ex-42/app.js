"use strict";
function show_magicians(magicians) {
    magicians.forEach(magician => console.log(magician));
}
// modification
function make_great(magicians) {
    return magicians.map((magician) => `the Great ${magician}`);
}
let originalMagicians = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
let greatMagicians = make_great([...originalMagicians]);
console.log("Original Magicians:");
show_magicians(originalMagicians);
console.log("\nGreat Magicians:");
show_magicians(greatMagicians);
