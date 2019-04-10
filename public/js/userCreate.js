
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

$("#login").on("click", function(event) {
  event.preventDefault();

  // make a newUser obj
  var newUser = {
      username: $("#username").val(),
      email: $("#email").val(),
      password: $("#password").val()
  };

  // // send an AJAX POST-request with jQuery
  // $.post("/api/auth", newUser)
  //     .then(function(data) {
  //         console.log(data);
  //         alert("Test!!");
  //     });

  // Validate with jQuery
  $.get("/api/validate");
 

  // empty each input box by replacing the value with an empty string
  $("#username").val("");
  $("#email").val("");
  $("#password").val("");
})

// app.post('/auth', function(request, response) {
// 	var username = request.body.username;
// 	var password = request.body.password;
// 	if (username && password) {
// 		connection.query('SELECT * FROM accounts WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
// 			if (results.length > 0) {
// 				request.session.loggedin = true;
// 				request.session.username = username;
// 				response.redirect('/home');
// 			} else {
// 				response.send('Incorrect Username and/or Password!');
// 			}			
// 			response.end();
// 		});
// 	} else {
// 		response.send('Please enter Username and Password!');
// 		response.end();
// 	}
// });