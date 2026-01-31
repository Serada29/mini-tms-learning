// Day 1 - Variables & State

const truckId = "TRK-001";
let truckStatus = "IDLE";
let totalTrips = 0;

console.log("Truck : ", truckId);
console.log("Status : ", truckStatus);
console.log("Trips : ", totalTrips);

//  simulate a dispatch

truckStatus = "ON_ROUTE";
totalTrips = totalTrips + 1;

console.log("------- AFTER DISPATCH -------");
console.log("Status : ", truckStatus);
console.log("Trips : ", totalTrips);
