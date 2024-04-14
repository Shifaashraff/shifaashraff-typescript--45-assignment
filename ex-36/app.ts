function make_shirt(size:string = "large", printMessage: String = "I love Typescript"){
    console.log(`creating ${size} size shirt with ${printMessage} on shirt.`)
} 

// calling function with default value
make_shirt();

// calling function with medium size and default message
make_shirt("medium");

// calling function with medium size and default message
make_shirt("small", "I love Javascript.");