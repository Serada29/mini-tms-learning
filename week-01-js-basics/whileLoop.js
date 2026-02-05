// Easy
// Loop through an array of truck statuses
// Print "Available" if status is "IDLE"

// Count how many drivers are "ACTIVE"
const truckStatuses = ["ON_ROUTE", "", "IDLE", "MAINTENANCE"];
let driversCount = 0;
// for (let i = 0; i < truckStatuses.length; i++) {
//   if (truckStatuses[i] === "IDLE") {
//     console.log("Available");
//     driversCount += 1;
//     break;
//   } else {
//     driversCount += 1;
//   }
// }
// console.log(`Drivers availble : ${driversCount}`);

// MEDIUM

// Find the first available truck and stop looping
// Skip trucks with null status

// Retry assigning a driver max 3 times

for (let i = 0; i < truckStatuses.length; i++) {
  while (truckStatuses[i] === null && driversCount < 3)
    if (truckStatuses[i] === null && driversCount < 3) {
      continue;
    } else if (truckStatuses[i] === "IDLE") {
      console.log("Available truck");
      driversCount += 1;
      break;
    }
}
console.log(`Drivers availble : ${driversCount}`);
