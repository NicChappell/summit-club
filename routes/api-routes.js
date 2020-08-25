// dependencies
var express = require('express');

// data
var fourteeners = require('../data/fourteeners.json');

// new express router
var router = express.Router();

// @route:  GET /api/fourteeners
// @desc:   Select all fourteener records
router.get('/fourteeners', function (req, res) {
    res.json(fourteeners);
});

// @route:  GET /api/fourteeners/:slug
// @desc:   Select single fourteener record
router.get('/fourteeners/:slug', function (req, res) {
    res.json(fourteeners[0]);
});

module.exports = router;
