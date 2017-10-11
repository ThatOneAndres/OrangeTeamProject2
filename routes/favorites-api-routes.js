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

  // Registers new user into DataBase
  app.post("/api/favorites", function(req, res) {
    // Add sequelize code to find all posts, and return them to the user with res.json
    db.favorites.create({
      userid: req.body.id,
      item: req.body.item,
      image_url: req.body.image_url,
      recipe_url: req.body.recipe_url
    }).then((result) => {
      res.json(result);
    })
  });

  // Validates if user auth is valid
  app.get("/api/favorites/:userid", function(req, res) {
    // Add sequelize code for creating a post using req.body,
    // then return the result using res.json
    db.favorites.findAll({where: {
      userid: req.params.userid,
    }}).then((result) => {
      if (result.length === 0) {
        res.send("NO Favorites")
      } else {
        res.json(result);
      }
    })
  });
}
