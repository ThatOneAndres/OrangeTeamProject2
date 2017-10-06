// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // Validates if user auth is valid
  app.get("/api/history/:username", function(req, res) {
    // Add sequelize code for creating a post using req.body,
    // then return the result using res.json
    db.history.findAll({where: {
      username: req.params.username,
    }}).then((result) => {
      if (result.length === 0) {
        res.send("No History available for user")
      } else {
        res.json(result);
      }
    })
  });
}
