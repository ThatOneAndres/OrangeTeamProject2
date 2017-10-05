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
      console.log(foods);

        $.post("api/recipesearch/", foods)
          .done(function(result){

             console.log(result);

             for(var i = 0; i < result.length; i++){
               var card = '<div class="col-md-4 col-sm-6 item"><div class="card"><h4 class="text-center">';

               card += result[i].recipe.label;

               card += '</h4><img class="card-img-top" src="';

               card += result[i].recipe.image;

               card += '" alt="Card image cap"><ul class="nav nav-tabs"><li class="nav-item"><a class="nav-link active" href="#">Recipe</a></li><li class="nav-item">';
               card += '<a class="nav-link" href="#">Nutrition</a></li><li class="nav-item"><a class="nav-link disabled" href="#">Diet</a></li></ul><div class="card-body"><p class="card-text">';


               card += result[i].recipe.label;

               card += '</p></div></div></div>';

                $("#results").append(card);
             }

          }
        );


    });
});
