var express = require('express'),
    bodyParser = require('body-parser');

module.exports = function() {
var app = express();
app.use(bodyParser.urlencoded({
      extended: true
  }));
  
app.use(bodyParser.json());
    app.get("/", function(req, res){res.send("Hello World") });
    require('../app/login/routes/login.route.server.js')(app);
return app;
}