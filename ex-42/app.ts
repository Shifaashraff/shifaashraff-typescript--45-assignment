

function show_magicians(magicians: string[]):void{
 magicians.forEach(magician => console.log(magician))
}
// modification
function make_great(magicians: string[]): string[] {
    return magicians.map((magician) => `the Great ${magician}`);
}

let originalMagicians: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];


let greatMagicians: string[] = make_great([...originalMagicians]);


console.log("Original Magicians:");
show_magicians(originalMagicians);

console.log("\nGreat Magicians:");
show_magicians(greatMagicians);
