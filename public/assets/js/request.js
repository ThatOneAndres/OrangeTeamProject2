$(document).ready(function(){

    $("button").click(function(){
        var foods = {
          foods : [],
          health : "peanut-free",
          recipeCount: 10,
          calories: 1000
        };
        var x = $("form").serializeArray();
        console.log(x);

        for(var i = 0 ; i < x.length; i++){
          foods.foods.push(x[i].name);
        }
      console.log( foods);

       $.ajax({url: "localhost:3000/api/recipesearch",
               success: function(result){
                 console.log(result);

                  $("#results").html(result);
        }});







    });
});