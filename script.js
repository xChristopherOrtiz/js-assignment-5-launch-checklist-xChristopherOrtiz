// Write your JavaScript code here!

window.addEventListener("load", function() {

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);

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

        const pilot = "chris";
        const copilot = "blake";
        const fuelLevel = 12000;
        const cargoMass = 8000;

        formSubmission(
            document,
            listedPlanets,
            pilot,
            copilot,
            fuelLevel,
            cargoMass
        );
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       
   })
   
});