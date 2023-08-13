// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
    const missionTarget = document.getElementById("missionTarget");

    missionTarget.innerHTML = `
        <h2>Mission Destination</h2>
        <ol>
            <li>Name: ${name}</li>
            <li>Diameter: ${diameter}</li>
            <li>Star: ${star}</li>
            <li>Distance from Earth: ${distance}</li>
            <li>Number of Moons: ${moons}</li>
        </ol>
        <img src="${imageUrl}" alt="Mission Destination Image">
    `;  
}

function validateInput(testInput) {
   if (testInput.trim() === "") {
        return "Empty";
   } else if (isNaN(testInput)) {
        return "Not a Number";
   } else {
        return "Is a Number";
   }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   const pilotStatus = validateInput(pilot);
   const copilotStatus = validateInput(copilot);
   const fuelStatus = validateInput(fuelLevel);
   const cargoStatus = validateInput(cargoLevel);

   if (pilotStatus === "Empty" || copilotStatus === "Empty" || fuelStatus === "Empty" || cargoStatus === "Empty") {
        alert("All fields are required!");
        return;
    }

    if (fuelStatus !== "Is a Number" || cargoStatus !== "Is a Number") {
        alert("Fuel Level and Cargo Mass must be valid numbers!");
        return;
    }

    const faultyItems = document.getElementById("faultyItems");
    const pilotStatusElement = document.getElementById("pilotStatus");
    const copilotStatusElement = document.getElementById("copilotStatus");
    const fuelStatusElement = document.getElementById("fuelStatus");
    const cargoStatusElement = document.getElementById("cargoStatus");
    const launchStatusElement = document.getElementById("launchStatus");

    pilotStatusElement.innerHTML = `Pilot ${pilot} is ready for launch`;
    copilotStatusElement.innerHTML = `Co-pilot ${copilot} is ready for launch`;

    if (fuelLevel < 10000) {
        faultyItems.style.visibility = "visible";
        fuelStatusElement.innerHTML = "Fuel level too low for launch";
        launchStatusElement.innerHTML = "Shuttle not ready for launch";
        launchStatusElement.style.color = "red";
    } else if (cargoLevel > 10000) {
        faultyItems.style.visibility = "visible";
        cargoStatusElement.innerHTML = "Cargo mass too high for launch";
        launchStatusElement.innerHTML = "Shuttle not ready for launch";
        launchStatusElement.style.color = "#C7254E";
    } else {
        faultyItems.style.visibility = "hidden";
        launchStatusElement.innerHTML = "Shuttle is ready for launch";
        launchStatusElement.style.color = "#419F6A";
    }
}

async function myFetch() {
    let planetsReturned;
    const response = await fetch('https://handlers.education.launchcode.org/static/planets.json'); // Replace with actual URL
    const planetsData = await response.json();
    return planetsData;
    planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json').then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
    const randomIndex = Math.floor(Math.random() * planets.length);
    return planets[randomIndex];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
