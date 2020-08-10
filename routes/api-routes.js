// dependencies
var express = require('express');
var fourteeners = require('../data/fourteeners.json')

// new express router
var router = express.Router();

// @route:  GET /api/fourteeners
// @desc:   Select all fourteener records
router.get('/fourteeners', function (req, res) {
    res.json(fourteeners)
})

module.exports = router;
