// array of username
let userName = ["admin", "hira", "alia", "shifa"];


userName.forEach(oneUser => {
if (oneUser === 'Admin'){
console.log(`Hello ${oneUser} ,would you like to see a status report?`)
} else {
    console.log(`Hello ${oneUser} ,thank you for logging in again.`)
}})