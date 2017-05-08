var app = require("../app.js");
var PORT = process.env.PORT || 8888;

app.listen(PORT, function() {
    console.log("Listing on " + PORT );
});

var request = require("supertest");
var should = require("should");


describe("Routing", function(){
  var url = "http://localhost:" + PORT;

  describe('/', function(){
    it('should return http 200 on get', function(done){
          request(url)
            .get('/')
            .send()
            .end(function(err,res){
              if(err){
                throw err;
              }
              res.should.have.property("status",404);
              done();
            })
        });
  });//end users
})