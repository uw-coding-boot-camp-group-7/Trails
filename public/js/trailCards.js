// Create a function to pull trails from the Hiking project API via AJAX call
function getTrails() {
  var $city = $("#trailTerm").val();
  var queryURL =
    "https://maps.googleapis.com/maps/api/geocode/json?address=" + $city + "&bounds=34.172684,-118.604794|34.236144,-118.500938&key=AIzaSyADwTKftdeqrk5jC1DSCZJLk9nkGi_aJk0";
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    var lattitude = response.results[0].geometry.location.lat;
    var longitude = response.results[0].geometry.location.lng;

    var queryURL =
    "https://www.hikingproject.com/data/get-trails?lat=" + lattitude + "&lon=" + longitude + "&maxDistance=50&key=200440393-24756b1a160e4136ab4606caf960655b";
    $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {

    // Create a variable with the path data trails for later convenience and an empty variable
    var trails = response.trails;
    var trailcards;
    
    // For loop through each trails in json data
    for (var i = 0; i < trails.length; i++) {
      
      // Create a variable with html script including the trails' image
      var img = `
      <div class="box" id="trailcard">
      <article class="media">
        <div class="media-left">
          <figure class="image is-98x98">
            <img src="` + trails[i].imgSmallMed + `" alt="Image" id="hikeImage">
          </figure>
        </div>`;
      
      // Create a variable with html script including the trails' name
      var name = `
      <div class="media-content">
      <div class="content">
          <strong id="name">` + trails[i].name + `</strong> `;

      // Create a variable with html script including the trails' location
      var location = '<small id="location">' + trails[i].location + '</small>';

      // Create a variable with html script including the trails' condition
      var condition = '<p><small id="condition">' + trails[i].conditionDetails + '</small></p>';

      // Create a variable with html script including the trails' summary
      var summary = '<p id="summary">' + trails[i].summary + '</p>';

      // Create a variable with html script including the trails' length
      var length = '<p id="length">Length: ' + trails[i].length + ' mi</p>';

      // Create a variable with html script including the trails' rating
      var rating = '<p id="rating">Rating: ' + trails[i].stars + '</p>';

      // Create a variable with the html script to close each trailcard
      var trailcardEnd = ` 
      </div>
      <nav class="level is-mobile">
        <div class="level-left">
          <a class="level-item" aria-label="like">
            <span class="icon is-small">
              <i class="fas fa-heart" aria-hidden="true"></i>
            </span>
          </a>
        </div>
      </nav>
      </div>
      </article>
      </div>
      </div>`;
      
      // Store the html script for each trailcard in the empty variable
      trailcards += img;
      trailcards += name;
      trailcards += location;
      trailcards += condition;
      trailcards += summary;
      trailcards += length;
      trailcards += rating;
      trailcards += trailcardEnd;

    }

    // Empty the contents of the trailcards-col; Append the new content
    $("#trailcards-col").empty();
    $("#trailcards-col").append(trailcards);
  });
});
}

// Button event: shows trails
$("#viewTrails").on("click", function(event) {
  event.preventDefault();
  getTrails();
});

