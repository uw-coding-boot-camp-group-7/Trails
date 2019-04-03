module.exports = function() {
  var queryURL =
    "https://www.hikingproject.com/data/get-trails?lat=47.6062&lon=-122.3320&maxDistance=50&key=200440393-24756b1a160e4136ab4606caf960655b";
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    var trails = response.data.trails;

    for (var i = 0; i < trails.length; i++) {
      var trail = $("<a>").text(trails[i].name);
      var summary = $("<a>").text(trails[i].summary);
      var difficulty = $("<a>").text(trails[i].difficulty);
      var stars = $("<a>").text(trails[i].stars);
      var votes = $("<a>").text(trails[i].starVotes);
      var location = $("<a>").text(trails[i].location);
      var url = $("<a>").text(trails[i].url);
      var img = $("<a>").text(trails[i].imgMedium);
      var length = $("<a>").text(trails[i].length);
      var status = $("<a>").text(trails[i].conditionStatus);
      var condition = $("<a>").text(trails[i].conditionDetails);

      $("#placeholder").append(
        trail,
        summary,
        difficulty,
        stars,
        votes,
        location,
        url,
        img,
        length,
        status,
        condition
      );
    }
  });
};
