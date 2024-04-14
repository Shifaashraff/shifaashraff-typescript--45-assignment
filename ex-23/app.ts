let bag: string = 'gucci';
let upperCase = 'GUCCI';
let num1 = 5;
let num2 = 4;
const phoneBrand =["vivo", "oppo", "tecno"];

// equality test
console.log("if bag is equal to gucci then I predict true");
console.log(bag === 'gucci')

// inequality test
console.log("if bag is not equal to gucci then I predict false")
console.log(bag != 'gucci')

// test using lower case
console.log("if GUCCI is equal to gucci then I predict true")
console.log(upperCase.toLowerCase() == 'gucci');

console.log("if GUCCI is not equal to gucci then I predict false.")
console.log(upperCase.toLowerCase() != 'gucci');

// numerical test
console.log("if num1 is equal to 5 ? then I predict to true.") 
console.log(num1 == 5)

// equal to
console.log("if num1 is not equal to 5 ? then I predict to false.") 
console.log(num1 != 5)

// greater than
console.log("if num1 is greater than num2 ? then I predict to true.") 
console.log(num1 > num2)

// greater than equal to
console.log("if num1 is greater than equal to 8 ? then I predict to false.") 
console.log(num1 >= 8)

// less than
console.log("if num2 is less than num1 ? then I predict to true.") 
console.log(num2 < num1)

// less than or equal to
console.log("if num1 is less than or equal to num2 ? then I predict to true.") 
console.log(num1 <= num2)

 // or opperator
 console.log("if 5 is greater than 4 or 5 is less than 8 .")
 console.log(5>4 || 5<8);

// and opperator
 console.log("if 4 is greater than 3 and 2 is less than 3.")
 console.log(4>3 && 2<3);

 // test for wheater an item in array
 console.log("test for wheater an item in array")
 console.log(phoneBrand.includes("vivo"))

 // test for wheater an item is not in array
 console.log("test for wheater an item is not in array")
 console.log(!phoneBrand.includes("nokia"));