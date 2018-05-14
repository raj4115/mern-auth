var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Book = require('../models/Book.js');
var passport = require('passport');
require('../config/passport')(passport);

/* GET ALL BOOKS */
router.get('/', passport.authenticate('jwt', { session: false}), function(req, res) {
    console.log("Express route");
    var token = getToken(req.headers);
    if(token) {
        Book.find(function(err, products) {
            if(err) return next(err);
            res.json(products);
        });
    } else {
        return res.status(403).send({success: false, msg: 'Unauthorized.'});
    }    
});

/* SAVE BOOK */
router.post('/', passport.authenticate('jwt', { session: false}), function(req, res) {
    var token = getToken(req.headers);
    if(token) {
    Book.create(req.body, function(err, post) {
        if(err) return next(err);
        res.json(post);
    });
    } else {
        return res.status(403).send({success: false, msg: 'Unauthorized.'});
    }
});

/* UPDATE BOOK */
router.put('/:id', passport.authenticate('jwt', {session: false}), function(req, res) {
    var token = getToken(req.headers);
    if(token){
        Book.findByIdAndUpdate(req.params.id, req.body, (err, updatedBook) => {
            if(err) {
                return next(err);
            } 
            res.json(updatedBook);
        });
    } else {
        return res.status(403).send({success: false, msg: 'Unauthorized'});
    }
});

/* DELETE BOOK */
router.delete('/:id', passport.authenticate('jwt', {session: false}), function(req, res){
    var token = getToken(req.headers);
    if(token) {
        Book.findByIdAndRemove(req.params.id, (err, deleted) => {
            if(err) {
                return next(err);
            }
            res.json(deleted);
        });
    } else {
        return res.status(403).send({success: false, msg: 'Unauthorized'});
    }
});

getToken = function(headers) {
    if(headers && headers.authorization) {
        var parted = headers.authorization.split(' ');
        if(parted.length === 2) {
            return parted[1];
        } else {
            return null;
        }
    } else {
        return null;
    }
}

module.exports = router;