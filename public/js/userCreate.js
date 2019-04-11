
// This js file adds user data into users table from login page.

$("#sign-up").click(function(event) {
    
  $("#login-console").addClass("cloak");
  $("#signup-console").removeClass("cloak");

});

$("#add-user").on("click", function(event) {
  event.preventDefault();

  // make a newUser obj
  var newUser = {
      username: $("#username").val(),
      email: $("#email").val(),
      password: $("#password").val()
  };

  // send an AJAX POST-request with jQuery
  $.post("/api/new", newUser)
      .then(function(data) {
          console.log(data);
          alert("Thank you for signing up!");
      });

  // empty each input box by replacing the value with an empty string
  $("#username").val("");
  $("#email").val("");
  $("#password").val("");

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

  // Validate with jQuery
  $.get("/api/validate", user);
 

  // empty each input box by replacing the value with an empty string
  $("#username").val("");
  $("#email").val("");
  $("#password").val("");
})
