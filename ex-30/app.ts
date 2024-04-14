// array of username
let userName = ["admin", "hira", "alia", "shifa"];

// make empty array
userName = []

if(userName.length === 0){
    console.log("your array is empty we need to find some users.")
} else{
userName.forEach(oneUser => {
if (oneUser === 'Admin'){
console.log(`Hello ${oneUser} ,would you like to see a status report?`)
} else {
    console.log(`Hello ${oneUser} ,thank you for logging in again.`)
}})}