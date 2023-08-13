// Write your JavaScript code here!

window.addEventListener("load", function () {

    let listedPlanets;

    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);

        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        const selectedPlanet = pickPlanet(listedPlanets);

        addDestinationInfo(
            document,
            selectedPlanet.name,
            selectedPlanet.diameter,
            selectedPlanet.star,
            selectedPlanet.distance,
            selectedPlanet.moons,
            selectedPlanet.image
        );

        



    })
    const form = document.querySelector("form")
    form.addEventListener("submit", function (event) {
        event.preventDefault()

        const pilot = document.querySelector("input[name = pilotName]").value
        const copilot = document.querySelector("input[name = copilotName]").value
        let fuelLevel = document.querySelector("input[name = fuelLevel]").value
        let cargoMass = document.querySelector("input[name = cargoMass]").value

        formSubmission(
            document,
            listedPlanets,
            pilot,
            copilot,
            fuelLevel,
            cargoMass
        );
    })
    

});
