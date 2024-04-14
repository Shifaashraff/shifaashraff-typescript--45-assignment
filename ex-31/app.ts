// current username list
let currentUser = ["Alia", "Ahsan", "kainat", "Ali", "Rabiqa"];

// new username list
let newUser = ["Ali", "Aqlima", "Ashfaq", "shifa", "Rabiqa"];

// loop through use to check availability
newUser.forEach(newOneUser => {
    let ourCondition = currentUser.some(currentOneUser => currentOneUser.toLowerCase()===newOneUser.toLowerCase())
    if (ourCondition){
        console.log(`sorry, ${newOneUser} is already taken.`)
    }else{
        console.log(`This username ${newOneUser} is available.`)
    }
})