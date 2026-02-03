const truckStatus = "MAINTENANCE";
const driverStatus = "EXPIRED";
const loadId = 1;

switch (truckStatus) {
  case "AVAILABLE":
    console.log("Truck is available");
    break;
  case "ON_ROUTE":
    console.log("Truck is on-route");
    break;
  case "MAINTENANCE":
    console.log("Truck needed maintenance");
    break;
  default:
    console.log("Unknown Status");
}

switch (driverStatus) {
  case "ACTIVE":
    console.log("Driver can accept load");
    break;
  case "SUSPENDED":
    console.log("Driver suspended");
    break;
  case "EXPIRED":
    console.log("Driver license expired");
    break;
  default:
    console.log("Invalid driver status");
}

if (!loadId || loadId === null) {
  console.log("Rejected missing loads");
} else {
  switch (truckStatus) {
    case "AVAILABLE":
      console.log("Dispatch created");
      break;
    case "ON_ROUTE":
      console.log("Dispatch rejected: truck busy");
      break;
    case "MAINTENANCE":
      console.log("Dispatch rejected: Truck is unavailable");
      break;
    default:
      console.log("Invalid truck status");
  }
}
