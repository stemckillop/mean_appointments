var express = require('./config/express');
var mongoose = require('mongoose');

var db = mongoose.connect("mongodb://localhost:27017/appointment");
require('./app/login/models/user.model.server.js');

var app = express();

app.listen(3000);
module.exports = app;
console.log("Server started at http://localhost:3000");