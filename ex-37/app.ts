function describe_city(city: string, country: string = 'pakistan'): void {
    console.log(`${city} is in ${country}`);
}

// Call the function
describe_city('karachi');
describe_city('islamabad');
describe_city('bologa', 'italy');