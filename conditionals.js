// let userLoggedIn = true;
// let welcomeMessage = "";


// if (userLoggedIn){
//     welcomeMessage = "Welcome back!";    
// } else {
//     let welcomeMessage = "Welcome new user!";
// }

let firstUser = {
    name:"Will Alex",
    age:33,
    accountLevel:"normal"
}


let secondUser = {
    name:"Sarah Kate",
    age:21,
    accountLevel:"premium"
}

let thirdUser = {
    name:"Audrey Simon",
    age:27,
    accountLevel: "mega-premium"
}


switch(thirdUser.accountLevel) {
    case "normal":
        console.log("You have a normal account!");
        break;
    case "premium":
        console.log("You have a premium account!");
        break;
    case "mega-premium":
        console.log("You have a mega premium account!");
        break;
    default:
        console.log("Unkown account type!");
}



// let userHasPremiumAccount = true;
// let userHasMegaPremiumAccount = false;

// userLoggedIn && userHasPremiumAccount;
// userLoggedIn && userHasMegaPremiumAccount;

// userLoggedIn || userHasPremiumAccount;
// userLoggedIn || userHasMegaPremiumAccount;

// !userLoggedIn;
// !userHasMegaPremiumAccount;




// if (userLoggedIn){
//     console.log("User logged in!");
// } else {
//     console.log("Intruder alert!");
// }

// const numberOfSeats = 30;
// let numberOfGuests = 30;

// if (numberOfGuests == numberOfSeats){
//     console.log("All seats are taken");
// } else if (numberOfGuests < numberOfSeats){
//     console.log("Allow more guests!")
// } else {
//     console.log("Don't allow more guests!")
// }