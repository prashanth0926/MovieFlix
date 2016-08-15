/**
 * Created by Prashanth Molakala on 7/18/2016.
 */

var mongoose = require('mongoose');
var schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var user = new schema({
    username : String,
    password : String,
    firstname : {
        type : String,
        default : ''
    },
    lastname : {
        type : String,
        default : ''
    },
    admin : {
        type : Boolean,
        default : false
    }
});

user.methods.getName = function () {
    return (this.firstname + ' ' + this.lastname);
};

user.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', user);