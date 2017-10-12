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

    console.log(req.body.label);
    console.log(typeof(req.session.passport.user.toString()))
    // console.log(typeof(req.session.passport.user.toString();
    console.log(req.body.dietLabels)
    console.log(req.body.url)
    console.log(req.body.image)

    // Add sequelize code to find all posts, and return them to the user with res.json
    db.favorites.create({
      userid: req.session.passport.user.toString(),
      label: req.body.label,
      dietLabels: req.body.dietLabels,
      url: req.body.url,
      image: req.body.image,
    }).then((result) => {
      console.log("THiS DID NOT WORK!")
      console.log(result);
    });
  });


  // Validates if user auth is valid
  app.get("/favorites/", function(req, res) {
    // Add sequelize code for creating a post using req.body,
    // then return the result using res.json

    console.log(req.session.passport.user)
    db.favorites.findAll({where: {
      userid: req.session.passport.user,
    }}).then((result) => {
      if (result.length === 0) {
        res.send("NO Favorites")
      } else {


        console.log(typeof(resultArray))

        result.forEach((val, index) => {

          var myObj = {
            label: val.label,
            dietLabels: val.dietLabels,
            url: val.url,
            image: val.image,
          }
          resultArray.push(myObj);
        })

        res.render("favorites", {favorites: resultArray});
      }
    })
  });
}
