// const numberOfPassengers = 10;

// for (let i = 0; i < numberOfPassengers; i++){    
//     console.log(`Passenger boarded!`);
// }

// console.log("All passengers boarded!")

// const passengers = [
//     "Will Alex",
//     "Sarah Kate",
//     "Audrey Simon",
//     "Tau Perk"
// ];

// // for (passenger of passengers){
// //     console.log(`Boarding passenger ${passenger}`);
// // }

// // for (let i in passengers){
// //     console.log(`Boarding passenger ${passengers[i]}`);
// // }

// for(let i = 0; i < passengers.length; i++){
//     console.log(`Boarding passenger ${passengers[i]}`)
// }


// const passengers = [
//     {
//         name:"Will Alex",
//         ticketNumber: 209542
//     },
//     {
//         name:"Sarah Kate",
//         ticketNumber: 169336
//     }, {
//         name:"Audrey Simon",
//         ticketNumber: 779042

//     },
//     {
//         name:"Tau Perks",
//         ticketNumber: 703911
//     }
// ];

// for (passenger of passengers){
//     console.log(`Boarding passenger ${passenger.name} with ticket number ${passenger.ticketNumber}`);    
// }

let seatsLeft = 10;
let passengersStillToBoard = 8;

let passengersBoarded = 0;

while (seatsLeft > 0 && passengersStillToBoard > 0){
    passengersBoarded++
    passengersStillToBoard --;
    seatsLeft--;
}

console.log(passengersBoarded);


