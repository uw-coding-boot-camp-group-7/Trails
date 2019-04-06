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
  app.post("/api/:id/:hike/complete", function(req, res) {
    db.Users.create(req.body).then(function(hikersdb) {
      res.json(hikersdb);
    });
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
