
module.exports = function(app){
  app.get('/', function(req, res){
    res.render('index',
      { whichPartial: function() {
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

}
