var mongoose = require('mongoose'),
    UserSchema = mongoose.model("User");

exports.login = function(req, res)
{
    var user = new UserSchema();
    user.username = req.body.username;
    user.password = req.body.password;
    UserSchema.findOne({username: user.username}).exec(function(err, data) {
        if (err)
        {
            res.status(400).json(err);
        }
        if (data)
        {
            if (data.resetPassword)
            {
                res.status(200).json({msg:"Must reset password, Please check email for token", data: null});
            }
            else if (data.password == user.password)
            {
                res.status(200).json({msg: "Successful Login", data:data});
            }
        }
        else
        {
            res.status(400).json({msg: "Unsuccessful Login", data:data});
        }
    });
}

exports.signup = function(req, res)
{
    console.log(req.body);
    var user = new UserSchema();
    user.username = req.body.username;
    user.password = req.body.password;
    user.firstname = req.body.firstname;
    user.lastname = req.body.lastname;

    UserSchema.find({username: user.username}).exec(function(err, data)
    {
        if (err)
        {
            res.status(300).json(err);
        }
        if (data.length > 0)
        {
            console.log("record exists");
            res.status(400).json({msg: "Error! User Exists!"});
        }
        else
        {
            console.log("no record exists");
            user.save(function(err, data) {
                if (err)
                {
                    res.status(400).json(err);
                }
                else
                {
                    res.status(200).json({msg:"Account created successfully", data: data});
                }
            });
        }
    });


}

exports.forgot = function(req, res)
{
    var user = new UserSchema();
    user.username = req.body.username;

    UserSchema.findOne({username: user.username}, function(err, data){
        if (err)
        {
            res.status(400).json({msg:"System error", data:err});
        }
        if (data)
        {
            data.resetPassword = true;
            data.forgotToken = "ABCDEFGHIJKLMNOP";
            data.password = "";
            data.save(function(err, saved){
                if (err)
                {
                    res.status(400).json({msg:"System error", data:err});
                }
                if (saved)
                {
                    res.status(200).json({msg:"Success, Please check email for token", data:null});
                }
            });
        }
    });
}

exports.reset = function(req, res)
{
    console.log("RESET");
    res.send("RESET FUNCTION");
}