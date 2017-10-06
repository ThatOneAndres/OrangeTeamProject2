var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var PORT = process.env.PORT || 3000;
var expressValidator = require('express-validator');

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(expressValidator());//this line must be after bodyparser middleware

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


//add login route
// Routes
// =============================================================
require("./routes/login-api-route.js")(app);

require("./routes/favorites-api-routes.js")(app);

require("./routes/recipe-api-route.js")(app);

require("./routes/api-registration")(app);
//
// page routes
//
app.get('/', function(req, res){

  res.render('index',{ whichPartial: function() {
             return "main";
       }
   });

});

app.get('/recipeSearch', function(req, res){
  res.render('index',{
       whichPartial: function() {
             return "recipeSearch";
       }
   });
});

app.get('/login', function(req, res) {
  res.render('login');
});


db.sequelize.sync({ force: true }).then(function() {

});


app.listen(PORT, function(){
  console.log("Listening on port: " + PORT);
});
