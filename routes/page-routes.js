
module.exports = function(app){
  app.get('/', function(req, res){
    res.render('index');
  });

  app.get('/recipeSearch', function(req, res){
    res.render('recipesearch');
  });

}
