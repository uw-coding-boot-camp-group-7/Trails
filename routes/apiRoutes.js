var db = require("../models");
const path = require ('path');

module.exports = function(app) {
  // 1 Get all users (working)
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
      res.json(hikersdb);
    });
  });

  // This get method tells user that user needs to login to view passport page. If user logged in, it returns "Welcome back"
  app.get('/public/passport.html', function(request, response) {
    if (request.session.loggedin) {
      response.send('Welcome back, ' + request.session.username + '!');
    } else {
      response.send('Please login to view this page!');
    }
    response.end();
  });

  // Create a new user
  app.post("/api/new", function(req, res) {
    var username = req.body.username;
    var password = req.body.password;
    var email = req.body.email;
    //TODO: validate unique username, email
    if (username && password && email) {
      db.Users.create(req.body).then(hikersdb => {
        res.json(hikersdb);
      });
    } else {
      console.log("Please enter your information!");
      res.send("Please enter your username, password and email");
    }
  });

  // User name and Password Validation

  app.post('/api/validate', function(req, res) {
    var username = req.query.username;
    var password = req.query.password;
    
     //console.log(req);
     //console.log(username + password);

    if (username && password) {
      db.Users.findAll({
        where: {
          username: username,
          password: password
        }
      }).then(hikersdb => {
        console.log("user request registered");
        // console.table(hikersdb);
        
        if (hikersdb.length > 0) {
          console.log("user found");
          req.session.loggedin = true;
          req.session.username = username;
          console.log(req.session.username + " has logged in");
          let url = path.join(__dirname,"/public/passport.html")
          console.log(url);
          res.redirect('../public/passport.html');
        } else {
          res.send('Incorrect Username and/or Password!');
          console.log(req.query.username + " is not found");
          res.end();
        }			
      });
    } else {
      console.log("please enter something")
      res.send('Please enter Username and Password!');
    res.end();
    }
  });
  

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