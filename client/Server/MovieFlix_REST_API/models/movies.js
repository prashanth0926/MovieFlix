/**
 * Created by Prashanth Molakala on 7/18/2016.
 */

var mongoose = require('mongoose');
var schema = mongoose.Schema;

var reviewSchema = new schema({
    rating : {
        type : Number,
        min : 1,
        max : 5,
        required : true
    },
    comment : {
        type : String
    },
    postedBy : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
    }
}, {
    timestamps : true
});

var movieSchema = new schema({
    Title : {
        type : String,
        required : true,
        unique : true
    },
    Year : {
        type : String
    },
    Rated : {
        type : String
    },
    Released : {
        type : String
    },
    Runtime : {
        type : String
    },
    Genre : {
        type : String
    },
    Director : {
        type : String
    },
    Writer : {
        type : String
    },
    Actors : {
        type : String
    },
    Plot : {
        type : String
    },
    Language : {
        type : String
    },
    Country : {
        type : String
    },
    Awards : {
        type : String
    },
    Poster : {
        type : String
    },
    Metascore : {
        type : String
    },
    imdbRating : {
        type : String
    },
    imdbVotes : {
        type : String
    },
    imdbID : {
        type : String
    },
    Type : {
        type : String
    },
    Reviews : [reviewSchema]
}, {
    timestamps : true
});

var Movies = mongoose.model('Movie', movieSchema);

module.exports = Movies;