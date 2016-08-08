/**
 * Created by Prashanth Molakala on 7/19/2016.
 */

var express = require('express');
var bodyParser = require('body-parser');
var movieRouter = express.Router();
var Movies = require('../models/movies');
var verify = require('../verify');

movieRouter.use(bodyParser.json());

movieRouter.route('/')
    .all(verify.verifyOrdinaryUser)
    .get(function (req, res, next) {
        Movies.find({})
            .populate('Reviews.postedBy')
            .exec(function (err, out) {
                if (err)    throw err;
                res.json(out);
            });
    })
    .post(verify.verifyAdmin, function (req, res, next) {
        Movies.create(req.body, function (err, out) {
            if (err)    throw err;
            res.writeHead(200, {
                'Content-Type': 'text/plain'
            });
            res.end('Added '+out.length+' movies');
        });
    })
    .delete(verify.verifyAdmin, function (req, res, next) {
        Movies.remove(function (err, out) {
            if (err)    throw err;
            res.writeHead(200, {
                'Content-Type': 'text/plain'
            });
            res.end('Cleared all movies');
        });
    });

movieRouter.route('/:Id')
    .all(verify.verifyOrdinaryUser)
    .get(function (req, res, next) {
        Movies.findById(req.params.Id)
            .populate('Reviews.postedBy')
            .exec(function (err, out) {
                if (err)    throw err;
                res.json(out);
            });
    })
    .put(verify.verifyAdmin, function (req, res, next) {
        Movies.findByIdAndUpdate(req.params.Id, {
            $set : req.body
        }, {
            new : true
        }, function (err, out) {
            if (err)    throw err;
            res.writeHead(200, {
                'Content-Type': 'text/plain'
            });
            res.end('Added '+out.length+' movies');
            console.log('Updated movie '+out.Title);
        });
    })
    .delete(verify.verifyAdmin, function (req, res, next) {
        Movies.findByIdAndRemove(req.params.Id, function (err, out) {
            if (err)    throw err;
            res.writeHead(200, {
                'Content-Type': 'text/plain'
            });
            res.end('Removed movie '+out.Title);
        });
    });

movieRouter.route('/:Id/reviews')
    .all(verify.verifyOrdinaryUser)
    .get(function (req, res, next) {
        Movies.findById(req.params.Id)
            .populate('Reviews.postedBy')
            .exec(function (err, out) {
                if (err)    throw err;
                res.json(out.Reviews);
            });
    })
    .post(function (req, res, next) {
        Movies.findById(req.params.Id, function (err, out) {
            if (err)    throw err;
            req.body.postedBy = req.decoded._doc._id;
            out.Reviews.push(req.body);
            out.save(function (err, out) {
                if (err)    throw err;
                res.writeHead(200, {
                    'Content-Type': 'text/plain'
                });
                res.end('Added review for '+out.Title);
            });
        });
    })
    .delete(verify.verifyAdmin, function (req, res, next) {
        Movies.findById(req.params.Id, function (err, out) {
            if (err)    throw err;
            out.Reviews = [];
            out.save(function (err, out) {
                if (err)    throw err;
                res.writeHead(200, {
                    'Content-Type': 'text/plain'
                });
                res.end('Removed all reviews for '+out.Title);
            });
        });
    });

movieRouter.route('/:Id/reviews/:reviewId')
    .all(verify.verifyOrdinaryUser)
    .get(function (req, res, next) {
        Movies.findById(req.params.Id)
            .populate('Reviews.postedBy')
            .exec(function (err, out) {
                if (err)    throw err;
                res.json(out.Reviews.id(req.params.reviewId));
            });
    })
    .put(function (req, res, next) {
        Movies.findById(req.params.Id, function (err, out) {
            if (err)    throw err;
            if (out.Reviews.id(req.params.reviewId).postedBy
                != req.decoded._doc._id) {
                var err = new Error('You are not authorized to perform this operation!');
                err.status = 403;
                return next(err);
            }
            out.Reviews.id(req.params.reviewId).remove();
            req.body.postedBy = req.decoded._doc._id;
            out.Reviews.push(req.body);
            out.save(function (err, out) {
                if (err)    throw err;
                res.writeHead(200, {
                    'Content-Type': 'text/plain'
                });
                res.end('Updated review');
            });
        });
    })
    .delete(function (req, res, next) {
        Movies.findById(req.params.Id, function (err, out) {
            if (err)    throw err;
            if (out.Reviews.id(req.params.reviewId).postedBy
                != req.decoded._doc._id) {
                var err = new Error('You are not authorized to perform this operation!');
                err.status = 403;
                return next(err);
            }
            out.Reviews.id(req.params.reviewId).remove();
            out.save(function (err, out) {
                if (err)    throw err;
                res.writeHead(200, {
                    'Content-Type': 'text/plain'
                });
                res.end('Deleted review');
            });
        });
    });

module.exports = movieRouter;