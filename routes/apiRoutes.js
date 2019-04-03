var db = require("../models");

module.exports = function(app) {
  // Get all users
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

  // Create a new user
  app.post("/api/user", function(req, res) {
    db.Users.create(req.body).then(function(hikersdb) {
      res.json(hikersdb);
    });
  });

  // Delete an user by id
  app.delete("/api/user/:id", function(req, res) {
    db.Users.destroy({ where: { id: req.params.id } }).then(function(hikersdb) {
      res.json(hikersdb);
    });
  });
};
