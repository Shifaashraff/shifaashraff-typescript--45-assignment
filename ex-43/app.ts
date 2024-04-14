function makeSandwich(...sandwichItems:string[]):void {
    console.log("Sandwich Summary:");
   sandwichItems.forEach(sandwichItems =>{
    console.log("-" + sandwichItems);
   })};

// Call the function three times with different numbers of arguments
makeSandwich("Cheese", "Tomato", "Lettuce");
makeSandwich("Turkey", "Bacon", "Avocado", "Swiss Cheese");
makeSandwich("Ham", "Mustard")
