var supertest = require("supertest");
var should = require("should");

// This agent refers to PORT where program is runninng.

var server = supertest.agent("http://localhost:3000");

// UNIT test begin


describe("Favorites PUT test",function(){
  // #1 REGISTER USER
  it("should register user successfully",function(done){
    server
    .post('/api/registeruser')
    .send({username : "okapoor@gmail.com", password: "omtest"})
    .expect("Content-type","application/json")
    .expect(200)
    .end(function(err,res){
      res.status.should.equal(200);
      res.body.error.should.equal(false);
      done();
    });
  });


  // #2 Test Favorites POST
  it("should register user successfully",function(done){
    server
    .post('/api/favorites')
    .send({username : "okapoor@gmail.com", item: "omtestitem",image_url: "http://testimage.com",recipe_url:"http://testrecipe.com"})
    .expect("Content-type","application/json")
    .expect(200)
    .end(function(err,res){
      res.status.should.equal(200);
      res.body.error.should.equal(false);
      done();
    });
  });

});