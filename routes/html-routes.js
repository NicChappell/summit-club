// dependencies
var express = require('express');
var path = require('path');

// new express router
var router = express.Router();

// @route:  GET /
// @desc:   Homepage
router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/map.html'));
});

module.exports = router;
