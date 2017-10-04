// Dependency
var request = require("request");


// function to construct URL passed for API
function constructURL(paramObject){
    if (paramObject.foods){
        var queryURL = "http://api.edamam.com/search?app_id=f2b0bd06&app_key=47f2733377e5a86b25e92d25a29fb72a&q=";
        var foods = paramObject.foods.toString();
        queryURL += foods;
        if (paramObject.calories){
            if(typeof paramObject.calories !== "number"){
                throw "calorie needs to be an integer";
            }else{
                queryURL += "&calories=";
                queryURL += "lte " + paramObject.calories;
            }
        }
        if (paramObject.health){
            if (typeof paramObject.health !== "string"){
                throw "health needs to be a String";
            }else{
                queryURL += "&health=";
                queryURL += paramObject.health;
            }
        }
        if (paramObject.recipeCount){
            if (typeof paramObject.recipeCount !== "number"){
                throw "recipeCount needs to be an integer";
            }else{
                queryURL += "&to=";
                queryURL += paramObject.recipeCount;
            }
        }
        return queryURL;
    }else{
        throw "foods property is required"
    }
}


module.exports = function(app){
    // Grabs object passed and calls edamam api
    app.post("api/recipesearch", function(req, res){
        var queryUrl = constructURL(req.body);
        request(queryUrl, function (error, response, body) {
            if (error) {console.log('error:', error);} // Print the error if one occurred
            console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
            if (JSON.parse(body).count === 0){
                res.send("No Recipes Found");
            }else{
                res.send(JSON.parse(body).hits);
            }
        });
    })
}