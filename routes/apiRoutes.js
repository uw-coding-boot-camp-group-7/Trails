var db = require("../models");

module.exports = function(app) {
  // 1 Get all users
  app.get("/api/all", function(req, res) {
    db.Users.findAll({}).then(function(hikersdb) {
      res.json(hikersdb);
    });
  });

  // Get all Ids
  app.get("/api/:id/all", function(req, res) {
    db.Users.findAll({
      where: {
        id: req.params.id
      }
    }).then(function(hikersdb) {
      //res.json(hikersdb);
      console.log(hikersdb);
      res.send("String datareturn");
    });
  });

  // 2 Create a new user
  app.post("/api/new", function(req, res) {
    const username = req.body.username;

    console.log(username);

    db.Users.create(req.body).then(hikersdb => {
      res.json(hikersdb);
    });
  });

  // Create a new user
  // app.post('/auth', function(request, response) {
  //   var username = request.body.username;
  //   var password = request.body.password;
  //   if (username && password) {
  //     connection.query('SELECT * FROM Users WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
  //       if (results.length > 0) {
  //         request.session.loggedin = true;
  //         request.session.username = username;
  //         response.redirect('/home');
  //       } else {
  //         response.send('Incorrect Username and/or Password!');
  //       }			
  //       response.end();
  //     });
  //   } else {
  //     response.send('Please enter Username and Password!');
  //     response.end();
  //   }
  // });

  // This will put in passport in new entry with the user id and hike param.
  app.put("/api/:id/:hike", function(res, req) {
    db.Passport.update()
  });

  // Delete an user by id
  app.delete("/api/:id/:hike/delete", function(req, res) {
    db.Users.destroy({ where: { id: req.params.id } }).then(function(hikersdb) {
      res.json(hikersdb);
    });
  });

};
