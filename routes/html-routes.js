// require express
var express = require('express');
// require path
var path = require('path');

// require models
var db = require('../models');

// create an express router
var router = express.Router();

// @route:  GET /
// @desc:   Homepage
router.get('/', function (req, res) {
    // add new visit to database
    db.visit.create({ route: 'root' })
        .then(function (result) {
            console.log(result);
        })
        .catch(function (err) {
            console.log(err);
        });

    // send html
    res.sendFile(path.join(__dirname, '../public/map.html'));
})

module.exports = router;
