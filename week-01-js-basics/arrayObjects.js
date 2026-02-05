const trucks = [
  { id: "TRK-001", status: "AVAILABLE", fuelLevel: 50 },
  { id: "TRK-002", status: "ON_ROUTE", fuelLevel: 30 },
  { id: "TRK-003", status: "MAINTENANCE", fuelLevel: 80 },
];

for (let i = 0; i < trucks.length; i++) {
  console.log(`Checking truck: ${trucks[i].id}`);
}

for (let i = 0; i < trucks.length; i++) {
  if (trucks[i].status === "AVAILABLE") {
    console.log(`Truck ${trucks[i].id} is available`);
  }
}

for (let i = 0; i < trucks.length; i++) {
  if (trucks[i].fuelLevel >= 50 && trucks[i].status === "AVAILABLE") {
    console.log(`Dispatch allowed for ${trucks[i].id}`);
  } else {
    console.log(`Not ready for dispatch: ${trucks[i].id}`);
  }
}
