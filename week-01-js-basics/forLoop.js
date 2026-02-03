// Easy: The Odometer Update

let milesDriven = 65;

for (let hoursCount = 1; hoursCount <= 5; hoursCount++) {
  console.log(`Hour ${hoursCount}: ${milesDriven * hoursCount} miles driven`);
}

// 🟡 Medium: Dispatch Capacity Check

for (
  let truckAvailableCount = 1;
  truckAvailableCount <= 10;
  truckAvailableCount++
) {
  if (truckAvailableCount % 2 === 0) {
    console.log(`Truck #${truckAvailableCount} is Available`);
  } else {
    console.log(`Truck #${truckAvailableCount} is on Break`);
  }
}

// 🔴 Hard: Fuel Level Alert System
// A fuel sensor checks a truck's tank every 10 gallons as it empties.

// Start a variable fuelLevel at 100.

// Write a loop that runs as long as fuelLevel is greater than 0.

// In each iteration, subtract 20 from the fuelLevel.

// Log the current fuel.

// Condition: If the fuel reaches exactly 20, log: "WARNING: Low fuel on Truck AC-402!"

for (let fuelLevel = 100; fuelLevel > 0; fuelLevel -= 20) {
  if (fuelLevel === 20) {
    console.log(`Warning: Low fuel level ${fuelLevel} on Truck AC-402!`);
  } else {
    console.log(`Fuel level: ${fuelLevel}`);
  }
}
let fuelLevel = 100; // Declared outside so it's "persistent"

for (fuelLevel; fuelLevel >= 0; fuelLevel -= 20) {
  console.log("Current Fuel: " + fuelLevel + " gallons."); // Always log the status

  if (fuelLevel === 20) {
    console.log("CRITICAL: Low fuel alert on Truck AC-402!");
  }
}
