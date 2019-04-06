
// This js file adds user data into users table from login page.

$("add-user").on("click", function(event) {
    event.preventDefault();

    // make a newUser obj
    var newUser = {
        name: $("#username").val().trim(),
        email: $("#email").val().trim(),
        password: $("#password").val().trim()
    };

    // send an AJAX POST-request with jQuery
    $.post("/api/user", newUser)
        .then(function(data) {
            console.log(data);
            alert("Thank you for singing up!");
        });

    // empty each input box by replacing the value with an empty string
    $("#username").val("");
    $("#email").val("");
    $("#password").val("");

});

// this is prototype version of userCreate.js I will keep modify this.