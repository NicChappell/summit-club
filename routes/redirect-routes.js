// require express
var express = require('express');

// require models
var db = require('../models');

// create an express router
var router = express.Router();

// @route:  GET /r/:fourteener
// @desc:   Redirect to corresponding 14er merch
router.get('/:fourteener', function (req, res) {
    // destructure route params
    var fourteener = req.params.fourteener.toLowerCase()

    // add new visit to database
    db.visit.create({ route: fourteener })
        .then(function (result) {
            console.log(result);
        })
        .catch(function (err) {
            console.log(err);
        });

    // redirect to amazon
    switch (fourteener) {
        case 'longs-peak':
            res.redirect('https://smile.amazon.com/s?rh=n%3A7141123011%2Cp_4%3AColorado+Summit+Club');
            break;
        default:
            res.redirect('/');
    }
})

module.exports = router;
