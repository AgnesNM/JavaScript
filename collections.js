let firstFrontRowGuest;
let secondFrontRowGuest;

firstFrontRowGuest = "Sarah Kate";
secondFrontRowGuest = "Audrey Simon";

let guests = ["Sarah Kate", "Audrey Simon", "Will Alex"];

let firstGuest = guests[0];
let secondGuest = guests[1];
// let thirdGuest = guest[3];

// console.log(firstGuest);
// console.log(secondGuest);
// console.log(thirdGuest);

let howManyGuests = guests.length;
// console.log(howManyGuests);

guests.push("Tau Perks")
guests.unshift("Abby Nduta");
guests.pop();
console.log(guests);

// -------------------passing by value vs reference -----

let numberOfGuests = 20;
let totalNumberOfGuests = numberOfGuests;

let artistProfile = {
    name:"Tau Perkington and Tau Perk",
    age: 27,
    available: true
};

let allProfiles = [artistProfile];

allProfiles.name = "Tau Perk";

// console.log(artistProfile.name);

// console.log(allProfiles);