var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false}));

app.listen(PORT, function(){
  console.log("Listening on port: " + PORT);
});
