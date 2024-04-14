// Array of magician's names
let magicians: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];

function show_magicians(magicians: string[]):void{
 magicians.forEach(magician => console.log(magician))
}
// modification
function make_great(magicians: string[]): string[] {
    return magicians.map((magician) => `the Great ${magician}`);
}

magicians = make_great(magicians)

// Call the function to show magicians
show_magicians(magicians);