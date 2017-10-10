function displayRecipes(result){
  
              console.log(result);
  
              var row = $("<row>");
              $("#results").append(row);
  
               for(var i = 0; i < result.length; i++){
                //Define recipe Item with props
                var recipeItem = result[i].recipe;
  
                //Define Jquery Dom elements
                var favButton = $("<a>")
                var colDiv = $("<div>");
                var cardDiv = $("<div>");
                var cardBlock = $("<div>");
                var title = $("<h4>");
                var img = $("<img>");
                var dietLabels = $("<p>");
                var fullRecipe = $("<a>");
  
                //Add attributes to elements
                favButton.attr({
                  name: recipeItem.label,
                  class: "favButton",
                });
  
                colDiv.attr({
                  class: "col-md-4 col-sm-6",
                });
  
                cardDiv.attr({
                  class: "card recipeCard",
                });
  
                img.attr({
                  src: recipeItem.image,
                  alt: recipeItem.label,
                  class: "card-img-top"
                })
  
                cardBlock.attr({
                  class: "card-block",
                  style: "text-align:center"
                });
  
                title.attr({
                  class: "card-title",
                  style: "font-weight: bold;"
                })
  
                title.text(recipeItem.label);
  
  
                dietLabels.attr({
                  style: "font-weight:bold;color:black"
                })
  
                console.log(recipeItem.dietLabels);
                dietLabels.text("Diet Labels : " + recipeItem.dietLabels.toString());
  
                fullRecipe.attr({
                  href: recipeItem.url,
                  class: "btn btn-primary card-btn",
                  target: "_blank"
                });
  
                fullRecipe.text("Full Recipe")
  
                colDiv.append(cardDiv);
                cardDiv.append(img);
                cardDiv.append($("<hr>"))
                cardBlock.append(title);
                cardBlock.append($("<hr>"));
                cardBlock.append(dietLabels);
                cardBlock.append($("<hr>"));
                cardBlock.append(fullRecipe);
  
  
                cardDiv.append(cardBlock)
  
                 // var card = '<div class="col-md-4 col-sm-6 item"><div class="card"><h4 class="text-center">';
  
                 // card += result[i].recipe.label;
  
                 // card += '</h4><img class="card-img-top" src="';
  
                 // card += result[i].recipe.image;
  
                 // card += '" alt="Card image cap"><ul class="nav nav-tabs"><li class="nav-item"><a class="nav-link active" href="#">Recipe</a></li><li class="nav-item">';
                 // card += '<a class="nav-link" href="#">Nutrition</a></li><li class="nav-item"><a class="nav-link disabled" href="#">Diet</a></li></ul><div class="card-body"><p class="card-text">';
  
  
                 // card += result[i].recipe.label;
  
                 // card += '</p></div></div></div>';
  
                  $("#results").append(colDiv);
               }
  
            };

$(document).ready(function(){

    $("#searchRecipeButton").click(function(){
      event.preventDefault();
      
        var foods = {
          foods : [],
          health : "peanut-free",
          recipeCount: 10,
          calories: 1000
        };
        var searchedRecipe = $("#searchRecipe").val()

        console.log(searchedRecipe);
       foods.foods = searchedRecipe.split(" ");
        console.log(foods);

        $.post("api/recipesearch/", foods)
          .done(function(result){

            console.log(result);

            var row = $("<row>");
            $("#results").append(row);

             for(var i = 0; i < result.length; i++){
              //Define recipe Item with props
              var recipeItem = result[i].recipe;

              //Define Jquery Dom elements
              var favButton = $("<a>")
              var colDiv = $("<div>");
              var cardDiv = $("<div>");
              var cardBlock = $("<div>");
              var title = $("<h4>");
              var img = $("<img>");
              var dietLabels = $("<p>");
              var fullRecipe = $("<a>");

              //Add attributes to elements
              favButton.attr({
                name: recipeItem.label,
                class: "favButton",
              });

              colDiv.attr({
                class: "col-md-4 col-sm-6",
              });

              cardDiv.attr({
                class: "card recipeCard",
              });

              img.attr({
                src: recipeItem.image,
                alt: recipeItem.label,
                class: "card-img-top"
              })

              cardBlock.attr({
                class: "card-block",
                style: "text-align:center"
              });

              title.attr({
                class: "card-title",
                style: "font-weight: bold;"
              })

              title.text(recipeItem.label);


              dietLabels.attr({
                style: "font-weight:bold;color:black"
              })

              console.log(recipeItem.dietLabels);
              dietLabels.text("Diet Labels : " + recipeItem.dietLabels.toString());

              fullRecipe.attr({
                href: recipeItem.url,
                class: "btn btn-primary card-btn",
                target: "_blank"
              });

              fullRecipe.text("Full Recipe")

              colDiv.append(cardDiv);
              cardDiv.append(img);
              cardDiv.append($("<hr>"))
              cardBlock.append(title);
              cardBlock.append($("<hr>"));
              cardBlock.append(dietLabels);
              cardBlock.append($("<hr>"));
              cardBlock.append(fullRecipe);


              cardDiv.append(cardBlock)

               // var card = '<div class="col-md-4 col-sm-6 item"><div class="card"><h4 class="text-center">';

               // card += result[i].recipe.label;

               // card += '</h4><img class="card-img-top" src="';

               // card += result[i].recipe.image;

               // card += '" alt="Card image cap"><ul class="nav nav-tabs"><li class="nav-item"><a class="nav-link active" href="#">Recipe</a></li><li class="nav-item">';
               // card += '<a class="nav-link" href="#">Nutrition</a></li><li class="nav-item"><a class="nav-link disabled" href="#">Diet</a></li></ul><div class="card-body"><p class="card-text">';


               // card += result[i].recipe.label;

               // card += '</p></div></div></div>';

                $("#results").append(colDiv);
             }

          }
        );
    });
    // To test comment out lines 227,228 and uncomment line 225
    // var data = ["chicken, bread","pork, eggs","butter,ham,egg"]

    if (isAuthenticated){
        $.get("/api/history/:username",function(data){
          var searchHistory = $("<a/>");
          searchHistory.attr("href","#history");
          searchHistory.attr("data-toggle", "collapse");
          searchHistory.text("Search History");
          var searchList = $("<div class='collapse' id='history'/>");
          for (let i = 0; i < data.length; i++){
              var search = $("<div/>");
              var anch = $("<a class='search-history'/>").text(data[i]);
              anch.attr("href","#");
              search.append(anch);
              searchList.append(search)
          }

          $(".search-form").after(searchList);
          $(".search-form").after(searchHistory);

      });
  }

  $(".search-history").click(function(){
    event.preventDefault();
    var ingredients = $(this).text();
    console.log(ingredients);
    var food = {
      foods: ingredients.split(",")
    }
    $.post("api/recipesearch/",food)
    .done(displayRecipes);


  });

});