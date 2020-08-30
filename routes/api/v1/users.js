// dependencies
var express = require('express');

// new router
var router = express.Router();

// @route:  GET /api/users
// @desc:   Select all user records
router.get('/', function (req, res) {
    res.send('/api/users');
});

// @route:  GET /api/users/:slug
// @desc:   Select single user record
router.get('/:slug', function (req, res) {
    res.send('/api/users/:slug');
});

// @route:  POST /api/users/sign-in
// @desc:   Sign in user
router.post('/sign-in', function (req, res) {
    res.send('/api/users/sign-in');
});

// @route:  POST /api/users/sign-up
// @desc:   Sign up user
router.post('sign-up', function (req, res) {
    res.send('/api/users/sign-up');
});

module.exports = router;
