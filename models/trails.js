// var axios = require("axios");

// module.exports = function() {
//   var queryURL =
//     "https://www.hikingproject.com/data/get-trails?lat=40.0274&lon=-105.2519&maxDistance=10&key=200440393-24756b1a160e4136ab4606caf960655b";
//     "https://www.hikingproject.com/data/get-conditions?ids=7001635,7002742,7000108,7002175,7005207&key=200440393-24756b1a160e4136ab4606caf960655b"
//   // Acquire event data from HikingProj API via AXIOS
//   axios
//     .get(queryURL)
//     .then(function(response) {
//       console.log(response.data.trails);
//     })
//     .catch(bug);
// };

// // Create a bug function that thoroughly catches errors
// function bug(error) {
//   if (error.response) {
//     // The request was made but the response received falls out of the range
//     console.log(error.response.data);
//     console.log(error.response.status);
//     console.log(error.response.headers);
//   } else if (error.request) {
//     // The request was made but no response was received
//     console.log(error.request);
//   } else {
//     // Error triggered in request set up
//     console.log("Error: ", error.message);
//   }
//   console.log(error.config);
// }