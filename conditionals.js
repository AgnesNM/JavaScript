let userLoggedIn = true;
let userHasPremiumAccount = true;
let userHasMegaPremiumAccount = false;

userLoggedIn && userHasPremiumAccount;
userLoggedIn && userHasMegaPremiumAccount;

userLoggedIn || userHasPremiumAccount;
userLoggedIn || userHasMegaPremiumAccount;

!userLoggedIn;
!userHasMegaPremiumAccount;




// if (userLoggedIn){
//     console.log("User logged in!");
// } else {
//     console.log("Intruder alert!");
// }

const numberOfSeats = 30;
let numberOfGuests = 30;

if (numberOfGuests == numberOfSeats){
    console.log("All seats are taken");
} else if (numberOfGuests < numberOfSeats){
    console.log("Allow more guests!")
} else {
    console.log("Don't allow more guests!")
}