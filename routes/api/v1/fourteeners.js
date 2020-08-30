// dependencies
var express = require('express');

// data
var fourteeners = require('../../../data/fourteeners.json');

// new router
var router = express.Router();

// @route:  GET /api/fourteeners
// @desc:   Select all fourteener records
router.get('/', function (req, res) {
    res.json(fourteeners);
});

// @route:  GET /api/fourteeners/:slug
// @desc:   Select single fourteener record
router.get('/:slug', function (req, res) {
    var fourteener = fourteeners.filter(fourteener => {
        return fourteener.slug === req.params.slug;
    });

    res.json(fourteener[0]);
});

module.exports = router;
