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

// Why is truckId a const but truckStatus is a let?
// We use let to reassign a value later on
// while we use const if we dont need to reassign the variables
