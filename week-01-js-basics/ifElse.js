const truckStatus = "AVAILABLE";
const truckId = 1;
const loadId = undefined;
const driverIsActive = true;

// Easy
if (truckStatus === "AVAILABLE") {
  console.log("Ready to dispatch");
} else {
  console.log("Not available");
}

if (truckId !== undefined) {
  console.log("Truck ID : ", truckId);
} else {
  console.log("Error ID is :", truckId);
}

// Medium
if (driverIsActive && truckStatus === "AVAILABLE") {
  console.log("Ready to dispatch");
} else if (!driverIsActive) {
  console.log("Driver Is not Active");
} else if (truckId !== "AVAILABLE") {
  console.log("Truck is not Available");
} else {
  console.log("There is no driver and truck Available");
}

// Hard
if (driverIsActive !== null && truckStatus === "AVAILABLE" && loadId !== null) {
  console.log("Dispatched Created");
} else {
  console.log("Error Rejected");
}

if (truckStatus !== "AVAILABLE") {
  console.log("Dispatch Rejected: Truck is not Available");
} else if (!driverIsActive) {
  console.log("Dispatch Rejected: Driver inactive");
} else if (loadId === null || loadId === undefined) {
  console.log("Dispatch Rejected: Missing Load");
} else {
  console.log("Dispatched created");
}
