// Write a condition that checks if a truck has any capacity left
// Reject empty driver names safely
// Explain why "" is falsy in your code comment

const remainingCapacity = 2;
if (remainingCapacity > 0) {
  console.log("Remaining Capacity :", remainingCapacity);
} else {
  console.log("Truck is fully loaded");
}

// Im confused in this area why this is not working
let driverName = " ";

if (driverName !== null && driverName !== undefined) {
  console.log("Driver Name : ", driverName);
} else {
  console.log("Empty Driver Name");
}

// "" it falsy because it one of the 6 has falsy value

// Medium
const truckId = 1;
const driverId = 1001;

if (truckId && driverId) {
  console.log("This is valid ID");
}

if (truckId !== null && truckId !== undefined) {
  console.log("Accepted");
}

// Hard
const myName = "JESSIE";
let age = 22;

if (myName) {
  console.log("Not empty ", myName);
}

// “Why is 0 falsy?” it was one of the has falsy value

// “Difference between null and undefined?” null is intentional while undefied is bugs and error

// “Why avoid == in production?” it cause silent production bugs

// “Give a real bug caused by coercion”
const availableDrivers = "5";

if (availableDrivers > 0) {
  console.log("Available drivers", availableDrivers);
}
