
// This js file adds user data into users table from login page.

$("#sign-up").click(function(event) {
    
  $("#login-console").addClass("cloak");
  $("#signup-console").removeClass("cloak");

});

$("#add-user").on("click", function(event) {
  event.preventDefault();

  // make a newUser obj
  var newUser = {
      username: $("#new-username").val(),
      email: $("#new-email").val(),
      password: $("#new-password").val()
  };

  // send an AJAX POST-request with jQuery
  $.post("/api/new", newUser)
      .then(function(data) {
          console.log(data);
      });

  // empty each input box by replacing the value with an empty string
  $("#new-username").val("");
  $("#new-email").val("");
  $("#new-password").val("");

});

// this is prototype version of userCreate.js I will keep modify this.

$("#log-in").on("click", function(event) {
  event.preventDefault();

  // make a newUser obj
  var user = {
      username: $("#username").val().trim(),
      password: $("#password").val().trim()
  };
  
  console.table(user);
  console.log("You are logged in!");

  // Validate with jQuery
  $.post("/api/validate", user);

 
  
  // empty each input box by replacing the value with an empty string
  $("#username").val("");
  $("#email").val("");
  $("#password").val("");
});
