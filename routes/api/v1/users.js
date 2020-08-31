// dependencies
var express = require('express');

// models
var db = require('../../../models');

// new router
var router = express.Router();

// @route:  GET /api/v1/users
// @desc:   Select all user records
router.get('/', function (req, res) {
    res.send('/api/users');
});

// @route:  GET /api/v1/users/:slug
// @desc:   Select single user record
router.get('/:slug', function (req, res) {
    res.send('/api/users/:slug');
});

// @route:  POST /api/v1/users/sign-in
// @desc:   Sign in user
router.post('/sign-in', function (req, res) {
    res.send('/api/users/sign-in');
});

// @route:  POST /api/v1/users/sign-up
// @desc:   Sign up user
router.post('/sign-up', function (req, res) {
    db.User.create(req.body)
        .then(result => res.status(200).json(result))
        .catch(err => res.status(500).json(err));
});

// @route:  PUT /api/v1/users/check-in
// @desc:   Check-in user
router.put('/check-in', function (req, res) {
    var id = req.body.id;
    var update = {
        '$push': {
            'fourteeners': {
                fourteener: req.body.fourteener,
                verified: true
            }
        }
    };
    var options = { new: true };

    db.User.findByIdAndUpdate(id, update, options)
        .then(result => res.status(200).json(result))
        .catch(err => res.status(500).json(err));
});

module.exports = router;
