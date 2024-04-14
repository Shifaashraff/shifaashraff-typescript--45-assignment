"use strict";
// Array of magician's names
let magicians = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
function show_magicians(magicians) {
    magicians.forEach(magician => console.log(magician));
}
// modification
function make_great(magicians) {
    return magicians.map((magician) => `the Great ${magician}`);
}
magicians = make_great(magicians);
// Call the function to show magicians
show_magicians(magicians);
