var request = require("request");
// API Recipe ID f2b0bd06
// API Recipe Key 47f2733377e5a86b25e92d25a29fb72a

obj1={
    foods: ["chicken"]
}
obj2 = {
    foods: ["chicken", "bread"],
    calories: 700,
    recipeCount: 15    
}
obj3 = {
    foods: ["chicken", "tomatoes", "garlic", "bread", "egg", "peanut butter"],
    recipeCount: 20,
    health: "peanut-free"
}
obj4 = {
    foods: ["chicken", "spaghetti", "tomato sauce"]
}

request(constructURL(obj2), function (error, response, body) {
    if (error) {console.log('error:', error);} // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log(JSON.parse(body).hits.length); // Print the HTML for the Google homepage.
  });

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

// console.log("obj1: ",constructURL(obj1));
// console.log("obj2: ",constructURL(obj2));
// console.log("obj3: ",constructURL(obj3));
// console.log("obj4: ",constructURL(obj4));

var array1 = ["a","b","c","d"];
var allFoods = [];

var sizeNCombination = function(storeCombinations,foodArray, size){
	if (size === 0){
        allFoods.push(storeCombinations);
		return;
	}else{
		for (var i = 0; i < foodArray.length; i++){
            var temp = storeCombinations.slice();
            temp.push(foodArray[i]);
            var newSize = size-1;
			sizeNCombination(temp,foodArray.slice(i+1),newSize);
		}
	}
}

var foodCombinations = function(foodArray){
    for (let i = foodArray.length; i > 0; i--){
        sizeNCombination([],foodArray, i)
    }
}
foodCombinations(array1);
console.log(allFoods);