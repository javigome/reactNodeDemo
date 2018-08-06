var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');


var User = require('../models/User');

module.exports  = {

    //login looks up the passed user in username, if it exits it then calls our password compare method. If the password is correct we create a signed JWT using our secret key and then fire off out callback.
    login: function(username, password, callback){

        User.findOne({ username: username }, function(err, user) {
            if(err){
                callback(err, null);
                return;
            }

            if(!user){
            //user not found
            callback(err, null)
            } else {
                user.comparePassword(password, function(err, isMatch) {
                    if(err){
                        callback(err, null);
                        return
                    }

                    if(isMatch){
                        var authToken = jwt.sign({ username: username, _id:user._id}, process.env.JWTSECRET);
                        callback(null, authToken);
                    }
                    else{
                        callback(err, null);
                    }
                });
            };
        });
    },
    //register takes the provided username and password, creates a userm creates a new jwt token for them and returns it in the callback
    register: function(username, password, callback){
        var newUser = new User({username,password});

        newUser.save(function(err, user) {
            if(err){
                callback(err,null);
                return;

            }

            var authToken = jwt.sign({ username: user.username, _id:user._id}. process.env.JWTSECRET);
            callback(null, authToken);
        });
    }
}