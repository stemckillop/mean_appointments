var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({
    username:String,
    password:String,
    firstname:String,
    lastname:String,
    token:String,
    resetPassword:Boolean,
    forgotToken:String
});

mongoose.model("User", UserSchema);